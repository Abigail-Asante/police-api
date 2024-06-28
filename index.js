import express from "express";
import statementRouter from "./routes/statement.js";
// import mongoose from "mongoose";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";




// create express app
const app = express();

// const connectionString = process.env.Mongo_url

// Database connection
dbConnection();
// apply middlewares
app.use(express.json());

app.use(statementRouter);

// listen for incoming request
app.listen(4000, () => {
    console.log('App is listening on port 4000');
});