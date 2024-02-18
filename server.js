const express = require('express');
const db = require('./db'); 
const cors = require('cors');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.use(express.json()); 

app.post('/clients', upload.single("clientPhoto"), (req, res) => {
    const { firstName, lastName, birthday, address, neededservice } = req.body;
    const clientPhoto = req.file ? req.file.buffer : null;

    const query = 'INSERT INTO clients (firstName, lastName, birthday, address, neededservice, photo) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, birthday, address, neededservice, clientPhoto], (error, results) => {
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