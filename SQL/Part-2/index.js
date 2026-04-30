// // 📌 1. Create Table
// // CREATE TABLE student (
// //     roll_no INT PRIMARY KEY,
// //     name VARCHAR(50),
// //     age INT
// // );
// // 📌 2. Insert Data
// // INSERT INTO student (roll_no, name, age)
// // VALUES (1, 'Ved', 20);
// // 📌 3. Show Data
// // SELECT * FROM student;
// // 📌 4. Update Data
// // UPDATE student
// // SET age = 21
// // WHERE roll_no = 1;
// // 📌 5. Delete Data
// // DELETE FROM student
// // WHERE roll_no = 1;
// // 📌 6. Where Condition
// // SELECT * FROM student
// // WHERE age > 18;
// // 📌 7. Order By
// // SELECT * FROM student
// // ORDER BY age ASC;
// // 📌 8. Constraints Example
// // CREATE TABLE student (
// //     roll_no INT PRIMARY KEY,
// //     name VARCHAR(50) NOT NULL,
// //     age INT CHECK (age >= 18)
// // );
// // Hinglish recap:
// // CREATE → table banana
// // INSERT → data dalna
// // SELECT → data dekhna
// // UPDATE → change karna
// // DELETE → hataana


// 1. JOINS (very important)
// ✅ INNER JOIN

// 👉 Dono tables me common data show karta hai

// SELECT student.name, course.course_name
// FROM student
// INNER JOIN course
// ON student.course_id = course.course_id;
// ✅ LEFT JOIN

// 👉 Left table ka sab data + matching right

// SELECT student.name, course.course_name
// FROM student
// LEFT JOIN course
// ON student.course_id = course.course_id;
// ✅ RIGHT JOIN

// 👉 Right table ka sab data + matching left

// SELECT student.name, course.course_name
// FROM student
// RIGHT JOIN course
// ON student.course_id = course.course_id;
// Hinglish:
// INNER → sirf matching
// LEFT → left sab + matching
// RIGHT → right sab + matching
// 📊 2. AGGREGATE FUNCTIONS
// SELECT COUNT(*) FROM student;
// SELECT MAX(age) FROM student;
// SELECT MIN(age) FROM student;
// SELECT AVG(age) FROM student;
// 📌 3. GROUP BY
// SELECT age, COUNT(*)
// FROM student
// GROUP BY age;

// 👉 Same age wale students ka count

// 🔍 4. LIKE (search)
// SELECT * FROM student
// WHERE name LIKE 'V%';

// 👉 V se start hone wale naam

// 🔑 5. ORDER BY
// SELECT * FROM student
// ORDER BY age DESC;

// 👉 age ke hisaab se sort

// 🔥 6. NORMALIZATION (theory)

// 👉 Data ko organize karna to avoid duplicate

// Types:
// 1NF → no repeating columns
// 2NF → partial dependency remove
// 3NF → transitive dependency remove
// 🎯 Viva short answers:
// Join kya hai?
// → Multiple tables ko combine karna
// Primary key?
// → Unique identifier
// Foreign key?
// → Dusre table ki primary key
// Normalization?
// → Data redundancy kam karna