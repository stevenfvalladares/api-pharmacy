const express = require("express");
const app = express();
app.listen(3000, console.log("Server running from port 3000"));

const { getMedicines, getStaff } = require("./consultas");

app.get("/medicines", async (req, res) => {
  const queryStrings = req.query;
  const medicines = await getMedicines(queryStrings);
  res.json(medicines);
});

app.get("/staff", async (req, res) => {
  const queryStrings = req.query;
  const staff = await getStaff(queryStrings);
  res.json(staff);
});
