import dotenv from "dotenv";
import express from 'express';
import connectDB from "./db/index.js";
import vendorRoutes from './routes/vendorRoutes.js';

dotenv.config({
    path: "./env",
});

const app = express();

app.use(express.json());

app.use('/vendors', vendorRoutes);


connectDB()
.then(
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is listening on port ${process.env.PORT || 3000}`);
    })
)
.catch((error) => {
    console.log(`Mongodb connection failed: ${error}`);
});