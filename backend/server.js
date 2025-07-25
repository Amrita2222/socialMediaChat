import express from 'express';
import dotenv from 'dotenv';
import "dotenv/config"
import cookieParser from 'cookie-parser';

import authRoutes from './src/routes/auth.route.js';
import { connectDB } from './src/lib/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

// routes

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});  