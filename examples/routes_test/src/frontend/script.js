document.getElementById("createUserButton").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("/api/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
});

document.getElementById("getUsers").addEventListener("click", () => {
    fetch("/api/user").then((result) => {
        return result.json();
    }).then((data) => {
        console.log(data);
    })
});