// Create a database
// Create a users table (Instagram-style)
// Insert some sample data


// 1. Create Database
// CREATE DATABASE instagram_db;
// USE instagram_db;


//  2. Create Users Table
// CREATE TABLE users (
//     user_id INT PRIMARY KEY AUTO_INCREMENT,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     full_name VARCHAR(100),
//     email VARCHAR(100) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     bio TEXT,
//     profile_pic VARCHAR(255),
//     followers INT DEFAULT 0,
//     following INT DEFAULT 0,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );



// This structure is similar to a basic Instagram user model.

// 3. Insert Sample Data
// INSERT INTO users (username, full_name, email, password, bio, profile_pic, followers, following)
// VALUES 
// ('ved_gohel', 'Ved Gohel', 'ved@gmail.com', 'hashed_password1', 'Full Stack Developer 🚀', 'ved.jpg', 1200, 300),

// ('john_doe', 'John Doe', 'john@gmail.com', 'hashed_password2', 'Love coding ❤️', 'john.jpg', 800, 150),

// ('jane_smith', 'Jane Smith', 'jane@gmail.com', 'hashed_password3', 'Travel Blogger 🌍', 'jane.jpg', 5000, 400),

// ('rahul_tech', 'Rahul Sharma', 'rahul@gmail.com', 'hashed_password4', 'Tech Enthusiast 💻', 'rahul.jpg', 2300, 600);



// 4. Check Data
// SELECT * FROM users;


//  Now you can use WHERE clause like this:


// SELECT * FROM users
// WHERE followers > 1000;


// Basic Query
// SELECT username 
// FROM users
// WHERE condition;



// Examples
// 1. Users with more than 1000 followers
// SELECT username 
// FROM users
// WHERE followers > 1000;

// Output will be only usernames like:

// ved_gohel
// jane_smith
// rahul_tech


// 2. Specific user
// SELECT username 
// FROM users
// WHERE username = 'ved_gohel';


// 3. Users from a pattern (starts with 'j')
// SELECT username 
// FROM users
// WHERE username LIKE 'j%';


// 4. Multiple conditions
// SELECT username 
// FROM users
// WHERE followers > 1000 AND following < 500;


//  Key Idea

// SELECT username → only prints names
// WHERE → filters which users to show







// 1. Comparison Operators

// Used to compare values.

// =
// SELECT username FROM users
// WHERE username = 'ved_gohel';


// != or <> (Not equal)
// SELECT username FROM users
// WHERE username != 'john_doe';



//  > < >= <=
// SELECT username FROM users
// WHERE followers > 1000;


// 2. Logical Operators

// Used to combine conditions.

//  AND
// SELECT username FROM users
// WHERE followers > 1000 AND following < 500;
 
//  OR
// SELECT username FROM users
// WHERE username = 'ved_gohel' OR username = 'john_doe';


//  NOT
// SELECT username FROM users
// WHERE NOT username = 'jane_smith';


//  3. IN Operator

// Match multiple values.

// SELECT username FROM users
// WHERE username IN ('ved_gohel', 'john_doe');


//  NOT IN
// SELECT username FROM users
// WHERE username NOT IN ('jane_smith');


// 4. BETWEEN Operator

// Used for ranges.

// SELECT username FROM users
// WHERE followers BETWEEN 500 AND 2000;

// Includes both 500 and 2000.

// 5. LIKE Operator (Pattern Matching)


//  Starts with
// SELECT username FROM users
// WHERE username LIKE 'v%';


//  Ends with
// SELECT username FROM users
// WHERE username LIKE '%e';


// Contains
// SELECT username FROM users
// WHERE username LIKE '%do%';


// 6. IS NULL / IS NOT NULL
//  Check NULL values
// SELECT username FROM users
// WHERE bio IS NULL;


// Not NULL
// SELECT username FROM users
// WHERE bio IS NOT NULL;


//  7. EXISTS Operator (Advanced)

// Checks if subquery returns data.

// SELECT username FROM users u
// WHERE EXISTS (
//     SELECT 1 FROM users WHERE followers > 3000
// );

//  Returns users if condition inside is true.

//  8. ANY and ALL (Advanced)


// ANY
// SELECT username FROM users
// WHERE followers > ANY (SELECT followers FROM users WHERE following > 500);

//  Greater than at least one value

//  ALL
// SELECT username FROM users
// WHERE followers > ALL (SELECT followers FROM users WHERE following > 500);

//  Greater than all values




//  Quick Revision Table
// Operator	Use
// =	Equal
// !=, <>	Not equal
// > < >= <=	Comparison
// AND	Both conditions true
// OR	Any condition true
// NOT	Reverse condition
// IN	Multiple values
// BETWEEN	Range
// LIKE	Pattern search
// IS NULL	Check null
// EXISTS	Subquery check
// ANY, ALL	Advanced comparison




//  Pro Tip (Exam + Interview)

// Most important operators:

// =, >, <
// AND, OR
// IN
// BETWEEN
// LIKE

