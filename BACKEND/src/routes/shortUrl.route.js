import express from "express";
import {createShortUrl} from "../controllers/shortUrl.controller.js";

// Create a router
const router = express.Router();

// Define the routes
router.post("/",createShortUrl);
  
// export the router
export default router;

// Note:
// This route handles the creation of shortened URLs.
// The logic for URL creation is implemented in the createShortUrl controller function.
// Currently, there is only one route (POST /) in this file, but more routes (e.g., update, delete, get URL by ID) could be added as needed.