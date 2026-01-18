/* eslint-env node */
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;
const db = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://${process.env.MYSQLHOST}:${PORT}`);
});
