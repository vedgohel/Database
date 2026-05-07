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





// find in mongoose




// const mongoose = require("mongoose");

// // Connect MongoDB
// mongoose.connect("mongodb://localhost:27017/test")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));


// // ================= SCHEMA =================

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
//   isActive: Boolean
// });


// // ================= MODEL =================

// const User = mongoose.model("User", userSchema);


// // ================= FIND DATA =================

// // Find all users
// User.find()
//   .then((res) => {
//     console.log("All Users:");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// // ================= FIND WITH CONDITION =================

// // Find users with age greater than 21
// User.find({ age: { $gt: 21 } })
//   .then((res) => {
//     console.log("Users age > 21:");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// // ================= FIND ONE =================

// // Find one user
// User.findOne({ name: "Ved" })
//   .then((res) => {
//     console.log("Single User:");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// // ================= FIND BY ID =================

// // Replace with real MongoDB _id
// User.findById("665b1a2c4f1d2e1234567890")
//   .then((res) => {
//     console.log("User By ID:");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// update mongoose




// const mongoose = require("mongoose");

// // Connect MongoDB
// mongoose.connect("mongodb://localhost:27017/test")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));


// // ================= SCHEMA =================

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
//   isActive: Boolean
// });


// // ================= MODEL =================

// const User = mongoose.model("User", userSchema);


// // ================= UPDATE ONE =================

// // Update single document
// User.updateOne(
//   { name: "Ved" }, // find condition
//   { age: 21 }      // updated value
// )
// .then((res) => {
//   console.log("Update One:");
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// // ================= UPDATE MANY =================

// // Update multiple documents
// User.updateMany(
//   { isActive: true },
//   { isActive: false }
// )
// .then((res) => {
//   console.log("Update Many:");
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// // ================= FIND BY ID AND UPDATE =================

// // Replace with real MongoDB _id
// User.findByIdAndUpdate(
//   "665b1a2c4f1d2e1234567890",
//   { age: 30 },
//   { new: true } // returns updated document
// )
// .then((res) => {
//   console.log("Updated User:");
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// // ================= FIND ONE AND UPDATE =================

// User.findOneAndUpdate(
//   { name: "Rahul" },
//   { age: 26 },
//   { new: true }
// )
// .then((res) => {
//   console.log("Find One And Update:");
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// test


// my name is ved gohel