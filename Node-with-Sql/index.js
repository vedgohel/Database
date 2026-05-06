const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "root",
});

// Function to generate random user
let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

let user = getRandomUser();
console.log(user);

// Create table if not exists
let createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(255)
);
`;

// Execute create table query
connection.query(createTableQuery, (err, result) => {
    if (err) {
        console.log("Error creating table:", err);
        connection.end();
        return;
    }
    console.log("Table created or already exists.");

    // Now insert the user
    let q = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";

    connection.query(
        q,
        [user.userId, user.username, user.email, user.password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("User inserted successfully!");
                console.log(result);
            }
            connection.end(); // close connection
        }
    );
});
// "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql" -u root -p => open in cmd mysql

// 3 types of mysql using in vs studio 
// 1. schema.sql
// 2. cmd in vs studio using username and password mysql'
// 3. using workbench 