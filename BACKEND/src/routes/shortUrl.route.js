// shortUrl.route.js
import { Router } from "express";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";
const router = Router();

router.post("/", createShortUrlWithoutUser);

export default router;

// Note:
// This route handles the creation of shortened URLs.
// The logic for URL creation is implemented in the createShortUrl controller function.
// Currently, there is only one route (POST /) in this file, but more routes (e.g., update, delete, get URL by ID) could be added as needed.