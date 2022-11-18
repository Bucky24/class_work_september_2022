class User {
    constructor(email, password, name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    static create(email, password, name) {
        if (name) {
            return new User(email, password, name);
        } else {
            return new User(email, password, "name");
        }    
    }

    static getFromDatabase(id) {
        // call the db to get a user
    }
}

const user = User.create("email@email.com", "changeme");

const dbUser = User.getFromDatabase(5);

// singleton
class UserFetcher {
    static instance = null;

    constructor() {
        this.selectionCount = 0;
    }

    get() {
        this.selectionCount ++;
    }

    static getInstance() {
        if (UserFetcher.instance) {
            return this.instance;
        }

        UserFetcher.instance = new UserFetcher();

        return UserFetcher.instance;
    }
}

UserFetcher.getInstance().get();