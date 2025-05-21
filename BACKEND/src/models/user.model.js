import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // A library used to hash and compare passwords securely. 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // This prevents the password from being returned in query results unless explicitly selected.
  },
  avatar: {
    type: String,
    required: false,
    default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp",
  },
});

// Password Comparison Method
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Transforming JSON output
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  }
});

// Password Hashing Middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the User model
export default User;

// Note: 
// This file defines the structure of the User model using Mongoose.
// It includes password hashing before saving and a method to compare passwords during login.
// Sensitive fields (like password) are removed from the JSON output for security.