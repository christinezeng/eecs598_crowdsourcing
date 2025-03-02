import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateContent = async (req, res) => {
	const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

	const image_url = decodeURIComponent(req.query.image_url);
	const user_label = decodeURIComponent(req.query.user_label);
	if(!image_url)
	{
		return res.status(400).json({ success: false, message: "Please provide image_url" });
	}
	
	try
	{
		const imageResp = await fetch(image_url)
			.then((response) => response.arrayBuffer());

		const result = await model.generateContent([
			{
				inlineData: {
					data: Buffer.from(imageResp).toString("base64"),
					mimeType: "image/jpeg",
				},
			},
			"Given the user chose " + user_label + ", is this image AI generated or Real? Is the user's label correct? Add a confidence score in your choice. Include a 2 sentence analysis." ,
		]);
		
		res.status(200).json({ success: true, data: result });
	}
	catch(error)
	{
		console.log("error in calling gemini api:", error.message, image_url);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};