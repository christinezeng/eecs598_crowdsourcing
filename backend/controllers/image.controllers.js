import Image from "../models/image.model.js";

export const getImages = async (req, res) => {
	try 
	{
		const images = await Image.find({});
		res.status(200).json({success: true, data: images});
	}
	catch (error)
	{
		console.log("error in fetching images:", error.message);
		res.status(500).json({success: false, message: "Server Error"});
	}
};