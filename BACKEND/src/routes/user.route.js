import express from "express"
import { getAllUserUrls } from "../controllers/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

// Create a router 
const router = express.Router()

// Define the routes
router.post("/urls",authMiddleware, getAllUserUrls)

// Export the router
export default router

// Note:
// This route is responsible for handling requests to fetch all URLs created by a specific user.
// It is protected by authMiddleware, ensuring that only authenticated users can access this route.
// The actual logic of fetching the URLs is handled in the getAllUserUrls controller.