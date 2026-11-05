require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");
const studentRoutes = require("./src/routes/studentRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("NodeJS MongoDB Application is Running");
});

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        process.exit(1);
    }
}

startServer();
