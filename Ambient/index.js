"use strict";
class Database {
    constructor(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    static getDatabase(host, user, password) {
        if (Database.database)
            return Database.database;
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}
const db1 = Database.getDatabase('localhost', 'root', '123');
const db2 = Database.getDatabase('localhost', 'root', '123');
console.log(db1 === db2);
