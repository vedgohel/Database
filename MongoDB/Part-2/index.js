// const mongoose = require("mongoose");

// // Connect MongoDB
// mongoose.connect("mongodb://localhost:27017/test")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB", err));


// // ================= SCHEMA =================

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
//   isActive: Boolean
// });


// // ================= MODEL =================

// const User = mongoose.model("User", userSchema);


// // ================= INSERT MANY =================

// User.insertMany([
//   {
//     name: "Ved",
//     age: 20,
//     email: "ved@gmail.com",
//     isActive: true
//   },
//   {
//     name: "Rahul",
//     age: 25,
//     email: "rahul@gmail.com",
//     isActive: false
//   },
//   {
//     name: "Priya",
//     age: 22,
//     email: "priya@gmail.com",
//     isActive: true
//   }
// ])
// .then((res) => {
//   console.log("Data Inserted Successfully");
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });





