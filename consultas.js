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

const getMedicines = async ({ limits = 10, order_by = "id_ASC", page = 1 }) => {
  if (page <= 0) {
    throw new Error("Page number cannot be equal to 0");
  }
  const offset = (page - 1) * limits;
  const [field, address] = order_by.split("_");

  if (!field || !address) {
    throw new Error("ORDER BY incorrectly declared!");
  }

  const formattedQuery = format(
    "SELECT * FROM medicines ORDER BY %s %s LIMIT %s OFFSET %s",
    field,
    address,
    limits,
    offset
  );
  const { rows: medicines } = await pool.query(formattedQuery);
  return medicines;
};

const getStaff = async ({ limits = 10, order_by = "id_ASC", page = 1 }) => {
  if (page <= 0) {
    throw new Error("Page number cannot be equal to 0");
  }
  const offset = (page - 1) * limits;
  const [field, address] = order_by.split("_");

  if (!field || !address) {
    throw new Error("ORDER BY incorrectly declared!");
  }

  const formattedQuery = format(
    "SELECT * FROM staff ORDER BY %s %s LIMIT %s OFFSET %s",
    field,
    address,
    limits,
    offset
  );
  const { rows: staff } = await pool.query(formattedQuery);
  return staff;
};

module.exports = { getMedicines, getStaff };
