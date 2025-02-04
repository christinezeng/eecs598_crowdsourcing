import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectImagesDB, connectUsersDB, connectUserLabelsDB } from "./config/db.js";
import imageRoutes from "./routes/image.route.js";
import userRoutes from "./routes/user.route.js";
import userLabelRoutes from "./routes/userlabel.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); // Allows handling JSON data in requests

console.log("Image routes loaded!🌷");
app.use("/api/images", imageRoutes);

console.log("User routes loaded!🌷");
app.use("/api/users", userRoutes);

console.log("User label routes loaded!🌷");
app.use("/api/userlabels", userLabelRoutes);

if(process.env.NODE_ENV === "production")
{
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	})
}

// Use an async function to ensure DB connections are established before server starts
const startServer = async () => {
	try {
		await connectImagesDB(); // Wait for each DB connection to be established
		await connectUsersDB();
		await connectUserLabelsDB();

		console.log("Databases connected successfully!");

		// Once DB connections are established, start the server
		app.listen(PORT, () => {
			console.log(`🚀 Server started at http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error("❌ Failed to connect to the database:", error.message);
		process.exit(1); // Exit if DB connection fails
	}
};

// Start the server
startServer();
