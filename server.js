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
    const { firstName, lastName, birthday, address, careerDevelopment, mentalHealth, substanceIssues, generalHealth } = req.body;
    const clientPhoto = req.file ? req.file.buffer : null;

    const careerDev = careerDevelopment === 'true';
    const mentalHlth = mentalHealth === 'true';
    const substanceIss = substanceIssues === 'true';
    const generalHlth = generalHealth === 'true';

    const query = 'INSERT INTO clients (firstName, lastName, birthday, address, careerDevelopment, mentalHealth, substanceIssues, generalHealth, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, birthday, address, careerDev, mentalHlth, substanceIss, generalHlth, clientPhoto], (error, results) => {
        if (error) {
            console.error("Error saving data:", error);
            res.status(500).send("Error saving data");
        } else {
            res.status(200).send("Data saved successfully");
        }
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM login WHERE username = ? AND password = ?';
    db.query(query, [username, password], (error, results) => {
        if (error) {
            console.error("Error querying login data:", error);
            res.status(500).send("Error querying login data");
        } else {
            if (results.length > 0) {
                res.status(200).json({ message: "Login successful" });
            } else {
                res.status(401).json({ message: "Invalid username or password" });
            }
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
