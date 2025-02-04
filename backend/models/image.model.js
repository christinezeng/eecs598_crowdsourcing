import mongoose from "mongoose";

// Destructure the Schema constructor from mongoose
const { Schema } = mongoose;

// Define the Image schema
const ImageSchema = new Schema({
	image_url: { type: String, required: true },  // URL of the image
	true_label: { type: String, required: true },  // Correct or canonical label for the image
});

// Create the Image model from the schema
const Image = mongoose.model("Image", ImageSchema);

// Export the model
export default Image;