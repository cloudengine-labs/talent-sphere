import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import employeeRoutes from './routes/employeeRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.REACT_APP_API_URL}`);
});
