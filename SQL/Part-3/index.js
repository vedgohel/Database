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


