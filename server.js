const express = require('express');
const db = require('./db'); 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

app.post('/clients', (req, res) => {
    const { firstName, lastName, birthday, address, neededservice } = req.body; 
    const query = 'INSERT INTO clients (firstName, lastName, birthday, address, neededservice) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, birthday, address, neededservice], (error, results) => {
        if (error) {
            console.error("Error saving data:", error);
            res.status(500).send("Error saving data");
        } else {
            res.status(200).send("Data saved successfully");
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});