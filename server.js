const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/users.routes");

app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World, how are you?");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
