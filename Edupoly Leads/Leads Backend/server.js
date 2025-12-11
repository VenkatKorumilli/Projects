const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const leadRoutes = require("./routes/lead.routes");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT || 4500;


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connectDB();

app.get("/", (req, res) => {
  res.send("Leads API is Running");
});

app.use("/api/leads", leadRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
