const express = require("express");
const mysql = require("mysql2");
const methodOverride = require("method-override");
const { faker } = require("@faker-js/faker");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "root",
});

// Faker function
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};



// ================= ROUTES =================

// 🏠 HOME - count users
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) AS count FROM users";

  connection.query(q, (err, result) => {
    if (err) throw err;
    res.render("home", { count: result[0].count });
  });
});

//  GET all users
app.get("/users", (req, res) => {
  let q = "SELECT * FROM users";

  connection.query(q, (err, users) => {
    if (err) throw err;
    res.render("user", { users });
  });
});

//  CREATE user
app.post("/users", (req, res) => {
  let user = getRandomUser();

  let q = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";

  connection.query(
    q,
    [user.id, user.username, user.email, user.password],
    (err) => {
      if (err) throw err;
      res.redirect("/users");
    }
  );
});

//  EDIT FORM
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;

  let q = "SELECT * FROM users WHERE id=?";

  connection.query(q, [id], (err, result) => {
    if (err) throw err;
    res.render("edit", { user: result[0] });
  });
});

//  UPDATE user
app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { username, email } = req.body;

  let q = "UPDATE users SET username=?, email=? WHERE id=?";

  connection.query(q, [username, email, id], (err) => {
    if (err) throw err;
    res.redirect("/users");
  });
});

// ❌ DELETE user
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;

  let q = "DELETE FROM users WHERE id=?";

  connection.query(q, [id], (err) => {
    if (err) throw err;
    res.redirect("/users");
  });
});



// 🚀 Server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});