// what is database?
// => it is a collection of data in a format that can be easily accessed.



// why database : 
// => can store large data
// => features  like security , scalability etc.
// => Easier to insert , update or delete data .






// SQL VS NOSQL

//                              SQL                                           NOSQL

// 1.            Relational Database (data stored                    non relational database (data stored in document/key   
//                   in tables )                                          -val/graphs etc.)

// 2.            eg - Mysql,Oracle,Postgresql etc                   eg - MongoDb , Cassandra Neo4j etc







// SQL => Structured query language
// => SQL is a programming language used to interact with relational databases.

// html -> structure
// css -> style
// javascript -> functionality
// sql -> relational databases





// tables in sql
// columns -> design ( schema ) -> { id , pass }
// rows -> tuple 



// database



// 1.creating new database
//  => CREATE DATABASE college;


// 2. use database
// => use database


// 3. delete database
// => drop database;







// creating tables 


// CREATE TABLE student{
//  roll_no int, 
//  name varchar(40),
// age int
// }


// Table queries


// 1. Create 
// 2. Insert
// 3. Update
// 4. Alter
// 5. Truncate
// 6. Delete





// Data-types

// 1. Char 
// 2. varchar
// 3. int
// 4. double
// 5. boolean






// What is a constraint in SQL?

// A constraint is a rule applied on a table’s column to control what data can be inserted.

// Constraint = data ke upar rule (galat data insert na ho)


// PRIMARY KEY → unique + compulsory
// NOT NULL → empty allowed nahi
// UNIQUE → repeat nahi
// CHECK → condition lagti hai
// DEFAULT → auto value





// example :
// CREATE TABLE student (
//     roll_no INT PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     age INT CHECK (age >= 18)
// );







// Primary Key

// A Primary Key is a column that uniquely identifies each row in a table.

// Features:
// Unique (duplicate allowed nahi)
// Not NULL (empty nahi ho sakta)
// Ek table me sirf 1 primary key


// CREATE TABLE student (
//     roll_no INT PRIMARY KEY,
//     name VARCHAR(50),
//     age INT
// );








//  Foreign Key

// A Foreign Key is a column that links one table to another table.

// It refers to Primary Key of another table



// CREATE TABLE course (
//     course_id INT PRIMARY KEY,
//     course_name VARCHAR(50)
// );
// CREATE TABLE student (
//     roll_no INT PRIMARY KEY,
//     name VARCHAR(50),
//     course_id INT,
//     FOREIGN KEY (course_id) REFERENCES course(course_id)
// );








// course table → main table
// student.course_id → foreign key
// Ye course.course_id ko refer karta hai

