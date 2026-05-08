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