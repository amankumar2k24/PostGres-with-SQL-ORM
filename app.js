require("dotenv").config({ path: `${process.cwd()}/.env` })
const express = require('express');
const app = express();

const authRoute = require("./route/authRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "Welcome to the API" });
});

app.use("/api/v1/auth", authRoute)
app.use((req, res) => res.status(404).json({ success: false, message: "Endpoint not found" }));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));