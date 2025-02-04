import User from "../models/user.model.js";

export const createUser = async (req, res) => {
	try 
	{
		// Create a new user (no data needed from req.body)
		const newUser = new User();

		// Save the new user to the database
		await newUser.save();
		
		// Send a successful response with the created user (including _id and timestamps)
		res.status(201).json({
			success: true,
			data: newUser, // returns new user with auto-generated _id and timestamps
		});
	}
	catch (error)
	{
		console.error("Error in creating user:", error.message);
		res.status(500).json({success: false, message: "Server Error"});
	}
};