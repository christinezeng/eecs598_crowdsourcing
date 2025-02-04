import mongoose from "mongoose";
import UserLabel from "../models/userlabel.model.js";

export const createUserLabel = async (req, res) => {
	const userLabel = req.body; // user will send this data

	if (!userLabel.user_id || !userLabel.image_id || !userLabel.label) {
		return res.status(400).json({success: false, message: "Please provide all fields"});
	}

	const newUserLabel = new UserLabel(userLabel);

	try
	{
		await newUserLabel.save();
		res.status(201).json({success: true, data: newUserLabel});
	}
	catch (error)
	{
		console.error("Error in Create UserLabel:", error.message);
		res.status(500).json({success: false, message: "Server Error"});
	}
};

export const updateUserLabel = async (req, res) => {
	const {user_id, image_id} = req.params;
	const filter = {user_id, image_id};
	const userLabel = req.body;

	if (!mongoose.Types.ObjectId.isValid(user_id)) {
		return res.status(404).json({success: false, message: "Invalid user id"});
	}

	if (!mongoose.Types.ObjectId.isValid(image_id)) {
		return res.status(404).json({success: false, message: "Invalid image id"});
	}

	if(!userLabel.label)
	{
		return res.status(404).json({success: false, message: "Please provide label field"});
	}

	try
	{
		// console.log(user_id, image_id)
		const updatedUserLabel = await UserLabel.findOneAndUpdate(filter, userLabel, {new: true, upsert: true});
		res.status(200).json({success: true, data: updatedUserLabel});
	}
	catch (error)
	{
		console.log("Error in Update UserLabel:", error.message);
		res.status(500).json({success: false, message: "Server Error"});
	}
}