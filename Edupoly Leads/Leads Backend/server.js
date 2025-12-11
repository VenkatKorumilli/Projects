const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const leadRoutes = require("./routes/lead.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

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

app.listen(4500, () => {
  console.log("Server Running on 4500");
});
