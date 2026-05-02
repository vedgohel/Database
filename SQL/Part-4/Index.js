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