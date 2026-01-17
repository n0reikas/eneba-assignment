/* eslint-env node */
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.use(cors());
app.use(express.json())

app.get('/list', (req, res) => {
    const search = req.query.search?.toLowerCase() || '';
    db.query(
        `SELECT * FROM games WHERE LOWER(title) LIKE ? OR LOWER(aliases) LIKE ?`,
        [`%${search}%`, `%${search}`],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});