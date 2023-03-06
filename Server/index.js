import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import infoRouter from "./information.routes.js"

dotenv.config();

var url = "mongodb://0.0.0.0:27017/BlackCoffie";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

mongoose.set("strictQuery", true);

mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected Succsessfully ");
    }
})

app.listen(4000, () => {
    console.log("On Post  4000");
});

app.use('/api/information', infoRouter);
