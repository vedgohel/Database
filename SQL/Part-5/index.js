

// DELETE vs DROP in SQL

// When you say “delete table”, there are two different meanings.

// 1. DELETE → Remove Data (Table stays)

// Deletes rows (records) from a table.

// Syntax
// DELETE FROM table_name
// WHERE condition;
// Example (users table)
// DELETE FROM users
// WHERE username = 'john_doe';

// Only that user is deleted.

// Without WHERE (Important)
// DELETE FROM users;

// Deletes all data, but the table still exists.

// 2. DROP TABLE → Delete Entire Table

// Deletes:

// Table structure
// All data
// Syntax
// DROP TABLE users;

// The table is completely removed from the database.

// 3. TRUNCATE → Remove All Data Quickly

// Removes all rows but keeps the table.

// TRUNCATE TABLE users;



// Difference Table
// Command	Deletes Data	Deletes Table Structure
// DELETE	Yes	No
// TRUNCATE	Yes (all)	No
// DROP	Yes	Yes


// Key Points

// DELETE removes specific rows (use WHERE for control)
// TRUNCATE removes all rows quickly
// DROP removes the entire table permanently


// Practical Understanding

// DELETE → remove selected users
// TRUNCATE → remove all users
// DROP → remove the whole table







// ALTER TABLE in SQL

// The ALTER TABLE statement is used to modify the structure of an existing table.

//  Basic Syntax
// ALTER TABLE table_name
// action;


// Common Operations


// 1. Add a New Column


// ALTER TABLE users
// ADD age INT;

// Adds a new column age to the users table.

// 2. Add Multiple Columns


// ALTER TABLE users
// ADD city VARCHAR(50),
// ADD country VARCHAR(50);



// 3. Modify Column (change datatype)

// ALTER TABLE users
// MODIFY age BIGINT;

// Note: MODIFY is used in MySQL.

// 4. Rename Column


// ALTER TABLE users
// RENAME COLUMN username TO user_name;

// 5. Drop Column

// ALTER TABLE users
// DROP COLUMN age;

// Removes the column permanently.

// 6. Rename Table


// ALTER TABLE users
// RENAME TO instagram_users;

// 7. Add Constraint (Example: UNIQUE)

// ALTER TABLE users
// ADD CONSTRAINT unique_email UNIQUE (email);

// 8. Drop Constraint

// ALTER TABLE users
// DROP INDEX unique_email;

// (MySQL uses DROP INDEX for removing UNIQUE)

//  Key Points

// Used to change table structure, not data
// Can add, modify, rename, or delete columns
// Changes are permanent

// Syntax may slightly differ in different databases (MySQL, PostgreSQL, etc.)


// Practical Example

// ALTER TABLE users
// ADD is_verified BOOLEAN DEFAULT FALSE;

// Adds a column to track verified users.