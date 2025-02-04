import mongoose from "mongoose";

// Destructure the Schema constructor from mongoose
const { Schema } = mongoose;

// Define the User Label schema
const UserLabelSchema = new Schema({
	user_id: { type: String, required: true },  // user_id 
	image_id: { type: String, required: true },  // image_id
	label: { type: String, required: true} // user's label either AI or Real
}, { timestamps: true });

// Create the Image model from the schema
const UserLabel = mongoose.model("UserLabel", UserLabelSchema);

// Export the model
export default UserLabel;