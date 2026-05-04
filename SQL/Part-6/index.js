// TRUNCATE TABLE in SQL

// The TRUNCATE TABLE statement is used to delete all rows from a table quickly, while keeping the table structure intact.

// Syntax
// TRUNCATE TABLE table_name;
// Example (your users table)
// TRUNCATE TABLE users;

//  This will remove all user records, but the users table will still exist.

//  Key Features
// Deletes all rows from the table
// Faster than DELETE (no row-by-row deletion)
// Cannot use WHERE (removes everything)
// Resets AUTO_INCREMENT (in MySQL)
// Table structure remains unchanged

//  Difference from DELETE

// Feature	DELETE	TRUNCATE
// Deletes rows	Yes (selected/all)	Yes (all only)
// WHERE support	Yes	No
// Speed	Slower	Faster
// Auto increment	Not reset	Reset
// Table exists	Yes	Yes


// Important Notes
// TRUNCATE is non-reversible in most cases
// It is treated like a DDL command in many databases
// Use carefully when working with real data


//  Practical Use
// TRUNCATE TABLE users;

// Use this when you want to quickly clear all data (e.g., testing, resetting app data).