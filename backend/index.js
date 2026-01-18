/* eslint-env node */
<<<<<<< HEAD
=======

>>>>>>> ae8ba8bf32a666500feae3972dfea6983a39657e
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.MYSQLPORT;
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

app.listen(PORT, () => {
<<<<<<< HEAD
    console.log(`Server running on http://${process.env.MYSQLHOST}:${PORT}`);
});
=======
    console.log(`Server running on http://localhost:${PORT}`);
});
>>>>>>> ae8ba8bf32a666500feae3972dfea6983a39657e
