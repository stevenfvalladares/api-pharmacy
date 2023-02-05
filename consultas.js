const { Pool } = require("pg");
const format = require("pg-format");

const pool = new Pool({
  user: "steven",
  host: "localhost",
  password: "22038367",
  database: "pharmacy",
  port: 5432,
  allowExitOnIdle: true,
});

const getMedicines = async ({ limits = 10, order_by = "id_ASC" }) => {
  const [field, address] = order_by.split("_");
  const formattedQuery = format(
    "SELECT * FROM medicines ORDER BY %s %s LIMIT %s",
    field,
    address,
    limits
  );
  const { rows: medicines } = await pool.query(formattedQuery);
  return medicines;
};

const getStaff = async ({ limits = 10, order_by = "id_ASC" }) => {
  const [field, address] = order_by.split("_");
  const formattedQuery = format(
    "SELECT * FROM staff ORDER BY %s %s LIMIT %s",
    field,
    address,
    limits
  );
  const { rows: staff } = await pool.query(formattedQuery);
  return staff;
};

module.exports = { getMedicines, getStaff };
