// mongodb shell => mongosh
// use delta_app => switch to database

// BSON DATA => Binary JSON => MongoDB stores data in BSON format (Binary JSON)

// JSON 
// 1. text-based format
// 2. space-efficient
// 3. human-readable
// BSON
// 1. binary format
// 2. more efficient for storage and retrieval
// 3. supports additional data types (like Date, ObjectId, etc.)



// Collection 
// Documents => JSON-like objects stored in collections
// Collection => group of related documents (similar to tables in SQL)


// INSERT IN DB 
// insertOne() => inserts a single document into a collection

// show collections
// db.students.insertOne({ name: "Alice", age: 25, city: "New York" })
// db.student.find()=> to retrieve all documents from the "students" collection

// if a collection does not exist, MongoDB will create it automatically when you
//  insert the first document into that collection.


// MongoDB Commands practice in mongosh 

// test>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// test> show dbs;
// admin        40.00 KiB
// alumni_db    32.00 KiB
// config       36.00 KiB
// gec-alumni  140.00 KiB
// igitmca      84.00 KiB
// local        68.00 KiB
// test> delete igimca;
// true
// test> show dbs;
// admin        40.00 KiB
// alumni_db    32.00 KiB
// config       36.00 KiB
// gec-alumni  140.00 KiB
// igitmca      84.00 KiB
// local        68.00 KiB
// test> use college;
// switched to db college
// college> db
// college
// college> show collections;

// college> db.students.insertOne({ name: "Alice", age: 25, city: "New York" });
// {
//   acknowledged: true,
//   insertedId: ObjectId('69fb84fda27808fb313682d1')
// }
// college> db.student.find()

// college> db.student.find();

// college> show collections;
// students
// college> db.students.find()
// [
//   {
//     _id: ObjectId('69fb84fda27808fb313682d1'),
//     name: 'Alice',
//     age: 25,
//     city: 'New York'
//   }
// ]
// college> db.students.insertOne([{ name: "VED", age: 26, city: "SHILMA" },  { name: "Raj", age: 25, city: "Mumbai" },
// |   { name: "Neha", age: 21, city: "Delhi" },
// |   { name: "Amit", age: 28, city: "Pune" }]);
// {
//   acknowledged: true,
//   insertedId: ObjectId('69fb85c5a27808fb313682d2')
// }
// college> db.students.find();
// [
//   {
//     _id: ObjectId('69fb84fda27808fb313682d1'),
//     name: 'Alice',
//     age: 25,
//     city: 'New York'
//   },
//   {
//     '0': { name: 'VED', age: 26, city: 'SHILMA' },
//     '1': { name: 'Raj', age: 25, city: 'Mumbai' },
//     '2': { name: 'Neha', age: 21, city: 'Delhi' },
//     '3': { name: 'Amit', age: 28, city: 'Pune' },
//     _id: ObjectId('69fb85c5a27808fb313682d2')
//   }
// ]
// college>