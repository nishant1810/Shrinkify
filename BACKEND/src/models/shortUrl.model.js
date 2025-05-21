import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({

  full_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

// Create the ShortUrl model
const shortUrl = mongoose.model("shortUrl", shortUrlSchema);

// Export the ShortUrl model
export default shortUrl;

// Note:
// This model represents each shortened URL in the database.
// It stores the original URL, the shortened version, the number of clicks, and the user who created it.
// The user field establishes a relationship with the User model, allowing us to link each URL to a specific user.