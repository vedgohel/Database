 // Delete in MongoDB Shell (mongosh)
//  Delete One Document
// db.users.deleteOne({ name: "Ved" })

// Deletes the first matching document.

//  Delete Many Documents
// db.users.deleteMany({ isActive: false })

// Deletes all matching documents.

// Example Collection Data
// db.users.find()

// Output:

// [
//   { name: "Ved", age: 20 },
//   { name: "Rahul", age: 25 },
//   { name: "Priya", age: 22 }
// ]


//  Delete by ID
// db.users.deleteOne({
//   _id: ObjectId("665b1a2c4f1d2e1234567890")
// })

//  Delete All Documents
// db.users.deleteMany({})

//  This removes all documents from the collection.

// Check Remaining Data
// db.users.find()
// Output Example
// { acknowledged: true, deletedCount: 1 }


// ved gohel


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


// // ================= DELETE ONE =================

// User.deleteOne({ name: "Ved" })
//   .then((res) => {
//     console.log("Delete One:");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// // ================= DELETE MANY =================

// User.deleteMany({ isActive: false })
//   .then((res) => {
//     console.log("Delete Many:");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// // ================= FIND BY ID AND DELETE =================

// // Replace with real MongoDB _id

// User.findByIdAndDelete("665b1a2c4f1d2e1234567890")
//   .then((res) => {
//     console.log("Deleted User:");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// // ================= FIND ONE AND DELETE =================

// User.findOneAndDelete({ name: "Rahul" })
//   .then((res) => {
//     console.log("Find One And Delete:");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// SCHEMA VALIDATION VIDEO

// Schema validation is the process of checking whether data conforms to a predefined structure,
//  rules, and constraints—called a schema. It’s widely used in formats like JSON, XML, databases,
//  and APIs to ensure data is correct before it’s processed.

//  What a Schema Defines

// A schema typically specifies:

// Fields / properties (what data is expected)
// Data types (string, number, boolean, etc.)
// Required vs optional fields
// Constraints (length, ranges, formats like email, regex patterns)


//  Example (JSON Schema)

// Here’s a simple schema:

// {
//   "type": "object",
//   "required": ["name", "age"],
//   "properties": {
//     "name": { "type": "string" },
//     "age": { "type": "number", "minimum": 0 },
//     "email": { "type": "string", "format": "email" }
//   }
// }


// Valid data:
// {
//   "name": "Alice",
//   "age": 30,
//   "email": "alice@example.com"
// }


// Invalid data:
// {
//   "name": "Bob",
//   "age": -5
// }

//  Fails because age is below the minimum.

//  Where Schema Validation Is Used
// APIs (request/response validation)
// Form validation in apps
// Database integrity (e.g., SQL constraints, NoSQL schemas)
// Configuration files
// Data pipelines


//  Popular Tools & Libraries
// JSON Schema (standard for JSON validation)
// Ajv (fast JS validator)
// Joi
// Yup
// Marshmallow
// Pydantic



//  Why It Matters


// Prevents bad or malicious data
// Improves reliability of systems
// Makes APIs self-documenting
// Helps debugging early


// In Mongoose, schema type options are additional settings you can apply to schema fields to control
//  validation, defaults, formatting, and behavior.

//  Basic Syntax


// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   }
// });

// Here:

// type → data type
// required, trim → schema type options


//  Common Schema Type Options

// 1. required

// Makes field mandatory.

// name: {
//   type: String,
//   required: true
// }
// 2. default

// Sets default value.

// isActive: {
//   type: Boolean,
//   default: true
// }
// 3. unique

// Ensures unique values.

// email: {
//   type: String,
//   unique: true
// }


// 4. trim

// Removes spaces from beginning and end.

// name: {
//   type: String,
//   trim: true
// }

// Input:

// "   Ved   "

// Stored:

// "Ved"



// 5. lowercase

// Converts string to lowercase.

// email: {
//   type: String,
//   lowercase: true
// }



// 6. uppercase

// Converts string to uppercase.

// code: {
//   type: String,
//   uppercase: true
// }



// 7. minlength / maxlength
// password: {
//   type: String,
//   minlength: 6,
//   maxlength: 20
// }


// 8. min / max

// For numbers.

// age: {
//   type: Number,
//   min: 18,
//   max: 60
// }


// 9. enum

// Allows only specific values.

// role: {
//   type: String,
//   enum: ["user", "admin", "manager"]
// }



// 10. match

// Uses regular expressions.

// email: {
//   type: String,
//   match: /.+\@.+\..+/
// }


// Full Example

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true
//   },

//   age: {
//     type: Number,
//     min: 18,
//     max: 60
//   },

//   role: {
//     type: String,
//     enum: ["user", "admin"],
//     default: "user"
//   }
// });

// module.exports = mongoose.model("User", userSchema);


// Common Mongoose Schema Types
// Type	Example
// String	"Ved"
// Number	25
// Boolean	true
// Date	new Date()
// Array	["JS", "React"]
// ObjectId	MongoDB reference
// Mixed	Any type
// Buffer	Binary data


