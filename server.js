const express = require("express");
const { getPriority } = require("os");
const path = require("path");


const app = express();
var PORT = 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/home", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/api/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});


const tables = [
   {
       name: "Ashley",
       phone: "5555555555",
       email: "ashley@greatdane.com",
       customerID: 1
   },
   {
       name: "Eddie",
       phone: "7777777777",
       email: "eddie@greatdane.com",
       customerID: 2
   },
   {
       name: "Casandra",
       phone: "3333333333",
       email: "casandra@greatdane.com",
       customerID: 3
   }
]
//display reserved tables
app.get("/api/tables", (req, res) => {
    return res.json(tables)
})

app.post("'/api/tables", (req, res) => {
    const newRes = req.body;
    newRes.customerID = newRes.name.replace();
    tables.push(newRes);
    res.json(newRes);
});










app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });