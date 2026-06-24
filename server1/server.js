;
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const issueRoutes = require("./routes/issueRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();
require("dotenv").config();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/issues", issueRoutes);

app.get("/", (req, res) => {
  res.send("Library Backend Running...");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});