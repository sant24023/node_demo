const express = require("express");
const router = express.Router();

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },

  {
    id: 2,
    name: "Jane Sam",
    email: "jane@gmail.com",
  },
];

router.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "users found successfully!",
    users: users,
  });
});

router.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `user not found with id of ${req.params.id}`,
    });
  }
  res.status(200).json({
    success: true,
    message: "user found successfully!",
    user: user,
  });
});

router.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "please provide name and email",
    });
  }
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json({
    success: true,
    message: "user created successfully!",
    users: users,
  });
});

router.put("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `user not found with id of ${req.params.id}`,
    });
  }
  const { name, email } = req.body;
  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;
  }
  res.status(200).json({
    success: true,
    message: "user updated successfully!",
    users,
  });
});

router.delete("/users/:id", (req, res) => {
  let user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `user not found with id of ${req.params.id}`,
    });
  }
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.status(200).json({
    success: true,
    message: "user deleted successfully!",
    users,
  });
});

module.exports = router;
