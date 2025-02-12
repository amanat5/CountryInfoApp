const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const REST_COUNTRIES_API = "https://restcountries.com/v3.1";

app.get("/api/countries", async (req, res) => {
    const { name } = req.query;
    try {
        const response = await axios.get(`${REST_COUNTRIES_API}/name/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching countries" });
    }
});


app.get("/api/countries/:code", async (req, res) => {
    const { code } = req.params;
    try {
        const response = await axios.get(`${REST_COUNTRIES_API}/alpha/${code}`);

        if (Array.isArray(response.data)) {
            res.json(response.data[0]); 
        } else {
            res.json(response.data);
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching country details" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
