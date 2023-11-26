import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import dbConnection from "../dbConfig/dbConnection.js";

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8800

// MONGODB CONNECTION
dbConnection();


//middlenames
app.use(cors());
app.use(xss());
app.use(bodyParser.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(router);

//error middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Dev Server running on port: ${PORT}`);
});

