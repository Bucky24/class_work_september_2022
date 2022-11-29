const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "frontend")));

const usersDataFile = path.resolve(__dirname, "..", "..", "data", "users.json");

app.post("/api/user", (req, res) => {
    console.log("called post user");

    const { username, password } = req.body;

    // get the list of existing users
    const existingUsersString = fs.readFileSync(usersDataFile, "utf8");
    const existingUsers = JSON.parse(existingUsersString);
    // check that our new user doesn't already exist
    const existingUser = existingUsers.find((user) => {
        return user.username === username;
    });

    if (existingUser) {
        console.log("error user exists");
        res.status(409);
        res.end();
        return;
    }

    // append the new user to the list of users
    existingUsers.push({
        username,
        password,
    });

    // write the new list of users back to the file
    fs.writeFileSync(usersDataFile, JSON.stringify(existingUsers, null, 4));

    res.end();
});

app.get("/api/user", (req, res) => {
    // get the list of existing users
    const existingUsersString = fs.readFileSync(usersDataFile, "utf8");
    const existingUsers = JSON.parse(existingUsersString);

    const usersWithoutPassword = existingUsers.map((user) => {
        const newUser = {...user};
        newUser.password = null;

        return newUser;
    });

    res.json(usersWithoutPassword);
    res.end();
});

app.listen(3001, () => {
    console.log("App is now ready for connections on port 3001");
});