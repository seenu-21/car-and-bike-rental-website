const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.get('/api/popular-vehicles', (req, res) => {
  const query = `
    SELECT vehicle_type, COUNT(*) as count
    FROM bookings
    GROUP BY vehicle_type
    ORDER BY count DESC
    LIMIT 5;
  `;
  db.query(query, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
