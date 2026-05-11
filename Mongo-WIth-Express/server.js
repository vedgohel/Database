const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

// Model
const User = mongoose.model("User", userSchema);

// Routes

// Home
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Create User
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update User
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete User
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});


// ved gohel

// This code sets up a simple Express server that connects to a MongoDB database using Mongoose. It defines a User schema and model, and provides routes for creating, retrieving, updating, and deleting users. The server listens on port 3000.