import express from 'express';
import dotenv from 'dotenv';
import methodOverride from 'method-override';

import {connectDB} from "./config/db.js"

import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

// Create App
const app = express();

//Set Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Routes
app.use('/users', userRoutes);
app.use('/users/:userId/notes', noteRoutes);

//DB 
await connectDB(process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});