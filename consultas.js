const { Pool } = require("pg");

const pool = new Pool({
  user: "steven",
  host: "localhost",
  password: "22038367",
  database: "pharmacy",
  port: 5432,
  allowExitOnIdle: true,
});

const getMedicines = async ({ limits = 10 }) => {
  const query = "SELECT * FROM medicines LIMIT $1";
  const values = [limits];
  const { rows: medicines } = await pool.query(query, values);
  return medicines;
};

const getStaff = async ({ limits = 10 }) => {
  const query = "SELECT * FROM staff LIMIT $1";
  const values = [limits];
  const { rows: staff } = await pool.query(query, values);
  return staff;
};

module.exports = { getMedicines, getStaff };
