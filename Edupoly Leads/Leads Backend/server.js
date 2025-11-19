var express = require("express");
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");
var bodyPaser = require("body-parser");
var jwt = require('jsonwebtoken');
const LeadsModel = require("./models/leads.model");
const userModel = require("./models/user.model");
var mongourl =
  "mongodb+srv://venkatkorumilli27:venkat123@cluster0.5wge51t.mongodb.net/edupoly_leads?retryWrites=true&w=majority&appName=Cluster0";
app.use(express.json());
app.use(cors());
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));
mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Not Connected");
  });

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Leads Api is Running");
});

app.post("/addlead", async (req, res) => {
  var newlead = new LeadsModel(req.body);
  await newlead.save();
});

app.get("/getallleads", async (req, res) => {
  var data = await LeadsModel.find();
  res.json({ data });
});

app.delete("/deleteLead/:id", async (req, res) => {
  var data = await LeadsModel.findByIdAndDelete(req.params.id);
  res.json({ data });
});

app.get("/getLeadById/:id",async(req,res)=>{
var data = await LeadsModel.findById(req.params.id);
res.json({data})
})

app.post("/addUser",async(req,res)=>{
var newUser = await userModel(req.body)
newUser.save();
})

app.post("/userLogin",async(req,res)=>{
try {
    const data = await userModel.findOne({ username: req.body.username,password:req.body.password});

    if (data) {

      const token = jwt.sign({ user: data.username }, 'shhhhh');
      res.send({ msg: "Successful", token, userDetails: data.username });
    } else {
      res.send({ msg: "Failed" }); 
    }
  } catch (e) {
    res.send({ msg: "serverError" });
  }
})

app.put("/editLead/:id",async(req,res)=>{
var data = await LeadsModel.findByIdAndUpdate(req.params.id,req.body)
res.json({data})
})

app.listen(4500, (req, res) => {
  console.log("Server Running on 4500");
});
