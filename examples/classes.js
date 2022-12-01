class User {
    constructor(id, username, password, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    verifyLogin(email, password) {
        return this.email === email && this.password === password;
    }

    delete() {

    }

    info() {
        console.log(`My User is ${this.username} (${this.id}) and email is ${this.email}`);
    }
}

User.prototype.updateUsername = function(newUsername) {
    this.username = newUsername;
}

class Admin extends User {
    verifyLogin(username, email, password) {
        const userLogin = super.verifyLogin(email, password);
        if (!userLogin) {
            return false;
        }

        return this.username === username;
    }

    doAdminTask(task) {
        console.log("Doing task " + task);
    }
}

const user = new Admin(1, "rwijtman", "testpass", "robbert@test.com");
const user2 = new User(2, "bucky24", "mypassword", "rob@test.com");
const user3 = new User(3, "solum", "changeme", "hello@test.com");

user.info();
user.verifyLogin("rwijtman", "robbert@test.com", "testpass");
user.updateUsername("rwijtman2");
user.info();
user2.info();
user2.verifyLogin("robbert@test.com", "testpass");
user3.info();

user.doAdminTask("setup sso");