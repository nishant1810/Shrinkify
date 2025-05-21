import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); 


import express from "express";
import {nanoid}from "nanoid";
import connectDB from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import userRoutes from "./src/routes/user.route.js";
import authRoutes from "./src/routes/auth.route.js";
import {redirectFromShortUrl} from "./src/controllers/shortUrl.controller.js";
import {errorHandler} from "./src/utils/errorHandler.js";
import cors from "cors";
import {attachUser} from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";

// Environment Setup

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

// Initializing Express app
const app= express();

// Middleware Setup
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// Attach user Middleware
app.use(attachUser);

// Routes Setup
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/create", shortUrl);

// Get Request to redirect to the original URL
app.get("/:id",redirectFromShortUrl);

// Error Handling Middleware
app.use(errorHandler);

// Start Server and Connect to Database
app.listen(3000, ()=>{
  connectDB();
  console.log("Server is running on port 3000");
})

// GET - Redirecting to another URL
// POST - Creating a Short URL
// PUT - Updating a Short URL
// DELETE - Deleting a Short URL
// PATCH - Updating a Short URL
