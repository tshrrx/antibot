const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const dirPath = process.env.DIR_PATH;

const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

app.post('/save-csv', (req, res) => {
    let { data } = req.body;
    const fields = ['x', 'y', 'timestamp', 'button', 'state'];

    const csvContent = [
        fields.join(','),
        ...data.map(item => `${item.x},${item.y},${item.timestamp},${item.button},${item.state}`),
    ].join('\n');

    const filePath = path.join(dirPath, 'captcha', 'mouse_data.csv');
    console.log('Saving file: yay');

    fs.mkdir(path.dirname(filePath), { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
            return res.status(500).send('Internal Server Error');
        }

        fs.writeFile(filePath, csvContent, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Internal Server Error');
            }

            exec(`python csvHandler.py ${filePath}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing Python script: ${error.message}`);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('File saved and processed successfully');
            });
        });
    });
});

app.get('/read-result', (req, res) => {
    const resultFilePath = path.join(dirPath, 'result.txt');

    fs.readFile(resultFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});