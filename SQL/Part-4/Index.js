// HAVING Clause in SQL

// The HAVING clause is used to filter groups of data created by GROUP BY.

// Simple idea:

// WHERE → filters rows
// HAVING → filters groups


//  Basic Syntax
// SELECT column_name, AGG_FUNCTION(column)
// FROM table_name
// GROUP BY column_name
// HAVING condition;


//  Examples with your users table


//  1. Groups having more than 1 user

// SELECT following, COUNT(*) AS total_users
// FROM users
// GROUP BY following
// HAVING COUNT(*) > 1;

// Only shows groups where count > 1

//  2. Average followers greater than 1000

// SELECT following, AVG(followers) AS avg_followers
// FROM users
// GROUP BY following
// HAVING AVG(followers) > 1000;


//  3. Maximum followers condition


// SELECT following, MAX(followers) AS max_followers
// FROM users
// GROUP BY following
// HAVING MAX(followers) > 2000;


//  WHERE + HAVING Together 
// SELECT following, COUNT(*) AS total_users
// FROM users
// WHERE followers > 500
// GROUP BY following
// HAVING COUNT(*) > 1;

//  Flow:

// WHERE filters rows
// GROUP BY creates groups
// HAVING filters groups


//  Key Points
// Used only with GROUP BY
// Works with aggregate functions
// Filters grouped results


//  Quick Difference
// Clause	Purpose
// WHERE	Filter rows
// HAVING	Filter groups


//  Real-life Example (Instagram Style)

// Find follower groups having high average popularity:

// SELECT following, AVG(followers)
// FROM users
// GROUP BY following
// HAVING AVG(followers) > 1000;








// General Order of Execution in SQL

// When you write a query, it looks like this:

// SELECT column
// FROM table
// WHERE condition
// GROUP BY column
// HAVING condition
// ORDER BY column
// LIMIT number;

// But internally, SQL does NOT execute in this order 

//  It follows a different logical execution order 

//  Actual Execution Order
// FROM → choose table
// WHERE → filter rows
// GROUP BY → make groups
// HAVING → filter groups
// SELECT → choose columns
// ORDER BY → sort result
// LIMIT → restrict rows


//  Example with your users table

// SELECT following, COUNT(*) AS total_users
// FROM users
// WHERE followers > 500
// GROUP BY following
// HAVING COUNT(*) > 1
// ORDER BY total_users DESC
// LIMIT 2;


// Step-by-step execution

//  SQL will process like this:

// FROM users → take data
// WHERE followers > 500 → filter users
// GROUP BY following → create groups
// HAVING COUNT(*) > 1 → keep valid groups
// SELECT following, COUNT(*) → pick columns
// ORDER BY total_users DESC → sort
// LIMIT 2 → show only top 2


//  Easy Memory Trick

//  F W G H S O L

// From
// Where
// Group By
// Having
// Select
// Order By
// Limit

//  Important for Exams

// Most students think SELECT runs first 
// But actually FROM runs first 
// WHERE comes before grouping
// HAVING comes after grouping