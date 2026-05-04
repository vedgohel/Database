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


// Practice 1 – SQL Queries (Basic)
// Given Table: users

// Columns:
// user_id, username, full_name, email, followers, following

//  Questions
// Q1. Display all users
// SELECT * FROM users;
// Q2. Display only usernames
// SELECT username FROM users;
// Q3. Show users with more than 1000 followers
// SELECT username FROM users
// WHERE followers > 1000;
// Q4. Show users whose name starts with 'j'
// SELECT username FROM users
// WHERE username LIKE 'j%';
// Q5. Show users with followers between 500 and 2000
// SELECT username FROM users
// WHERE followers BETWEEN 500 AND 2000;
// Q6. Show users with specific usernames
// SELECT username FROM users
// WHERE username IN ('ved_gohel', 'john_doe');
// Q7. Sort users by followers (highest first)
// SELECT username, followers FROM users
// ORDER BY followers DESC;
// Q8. Show top 2 users
// SELECT username, followers FROM users
// ORDER BY followers DESC
// LIMIT 2;
// Q9. Count total users
// SELECT COUNT(*) FROM users;
// Q10. Find average followers
// SELECT AVG(followers) FROM users;
// Mini Challenge (Try Yourself)

//  Write a query to:

// Find user with lowest followers
// Show users not equal to 'ved_gohel'
// Count users having followers > 1000


// Practice 2 – SQL Queries (Intermediate)
// Table: users

// Columns:
// user_id, username, full_name, email, followers, following, created_at

//  Questions + Solutions


// Q1. Show users having followers > 1000 and following < 500
// SELECT username, followers, following
// FROM users
// WHERE followers > 1000 AND following < 500;
// Q2. Find total followers of all users
// SELECT SUM(followers) AS total_followers
// FROM users;
// Q3. Find maximum and minimum followers
// SELECT MAX(followers) AS max_followers,
//        MIN(followers) AS min_followers
// FROM users;
// Q4. Count users grouped by following
// SELECT following, COUNT(*) AS total_users
// FROM users
// GROUP BY following;
// Q5. Show groups having more than 1 user
// SELECT following, COUNT(*) AS total_users
// FROM users
// GROUP BY following
// HAVING COUNT(*) > 1;
// Q6. Show average followers for each following group
// SELECT following, AVG(followers) AS avg_followers
// FROM users
// GROUP BY following;
// Q7. Show top 3 users with highest followers
// SELECT username, followers
// FROM users
// ORDER BY followers DESC
// LIMIT 3;
// Q8. Show users created recently (latest first)
// SELECT username, created_at
// FROM users
// ORDER BY created_at DESC;
// Q9. Update followers for a specific user
// UPDATE users
// SET followers = followers + 500
// WHERE username = 'ved_gohel';
// Q10. Delete users with very low followers (< 100)
// DELETE FROM users
// WHERE followers < 100;