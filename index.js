const express = require("express");
const app = express();
app.listen(3000, console.log("Server running from port 3000"));

const { getMedicines, getStaff } = require("./consultas");

app.get("/medicines", async (req, res) => {
  try {
    const queryStrings = req.query;
    const medicines = await getMedicines(queryStrings);
    res.json(medicines);
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
});

app.get("/staff", async (req, res) => {
  try {
    const queryStrings = req.query;
    const staff = await getStaff(queryStrings);
    res.json(staff);
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
});
