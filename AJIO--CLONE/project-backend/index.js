import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();

dotenv.config();


app.get("/", (req, res) => {
    res.send("Hello from backend.");
});

mongoose.connect(process.env.MONGODBURL)

    .then(() => console.log("Connected to MongoDB"))


    .catch((error) => console.log(error));


app.listen(8000, () => console.log("server is running on port 8000."));