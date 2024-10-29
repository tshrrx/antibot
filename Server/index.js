const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// opening a port for the server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// middleware 
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);

// testing route 
app.get('/', (req, res) => {
    res.send("Welcome to the anti bot server");
})

// routes 
