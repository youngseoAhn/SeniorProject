const express = require('express');
const db = require('./db'); // DB 연결 설정이 있는 파일
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // JSON 본문 파싱을 위해

// 클라이언트 정보를 받아서 MySQL에 저장하는 라우트
app.post('/clients', (req, res) => {
    const { firstName, lastName, birthday, address, neededservice } = req.body; // 'servicesNeeded'를 'neededservice'로 변경
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