const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: '33061', // Specify the port here
    user: 'root',
    password: 'root',
    database: 'test_dbAPI'
});

// Check if the connection is successful
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection
});

// Route handler for the root path ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for creating a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const values = [newUser.name, newUser.email];

    pool.query(sql, values, (error, result) => {
        if (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        newUser.id = result.insertId; // Assign the generated ID to the user object
        res.status(201).json(newUser);
    });
});

// Route for getting all users with optional field selection
app.get('/users', (req, res) => {
    // Get the fields to select from query parameters
    const fields = req.query.fields;

    // Construct the SQL query based on the selected fields
    let sql;
    if (fields) {
        // If fields are specified, select only those fields
        sql = `SELECT ${fields} FROM users`;
    } else {
        // If no fields are specified, select all fields
        sql = 'SELECT * FROM users';
    }

    pool.query(sql, (error, results) => {
        if (error) {
            console.error('Error retrieving users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

// Route for deleting a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';

    pool.query(sql, userId, (error, result) => {
        if (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(204).send(); // No content
    });
});

// Route for updating (patching) a user by ID
app.patch('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const sql = 'UPDATE users SET ? WHERE id = ?';

    pool.query(sql, [updatedUser, userId], (error, result) => {
        if (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});