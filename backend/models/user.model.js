import mongoose from "mongoose";

// Destructure the Schema constructor from mongoose
const { Schema } = mongoose;

// Define the User schema
// no additional input needed
const UserSchema = new Schema({}, { timestamps: true });

// Create the User model from the schema
const User = mongoose.model("User", UserSchema);

// Export the model
export default User;

