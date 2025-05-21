import express from "express"
import { register_user, login_user,logout_user,get_current_user } from "../controllers/auth.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

// Create a router
const router = express.Router()

// Define the routes
router.post("/register", register_user)
router.post("/login", login_user)
router.post("/logout", logout_user)
router.get("/me", authMiddleware,get_current_user)

// Export the router
export default router

// Note:
// This file defines four authentication-related routes (/register, /login, /logout, /me).
// The /me route is protected by the authMiddleware to ensure that only authenticated users can access it.
// The logic for handling each route is implemented in the corresponding controller functions defined in auth.controller.js.