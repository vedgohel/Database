

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






