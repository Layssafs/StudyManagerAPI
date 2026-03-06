const express = require("express");
const app = express();
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "StudyManager API está rodando!"});
});

app.use("/users", userRoutes);
app.use("/courses", courseRoutes);
app.use("/enrollments", enrollmentRoutes);
app.use(errorHandler);

module.exports = app;