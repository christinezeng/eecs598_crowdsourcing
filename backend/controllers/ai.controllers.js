import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateContent = async (req, res) => {
	const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: 'models/gemini-2.0-flash-lite' });

	const image_url = decodeURIComponent(req.query.image_url);
	const user_label = decodeURIComponent(req.query.user_label);
	if(!image_url)
	{
		return res.status(400).json({ success: false, message: "Please provide image_url" });
	}
	
	try
	{
		console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "Loaded" : "Not Set");
		const imageResp = await fetch(image_url)
			.then((response) => response.arrayBuffer());

		const result = await model.generateContent([
			{
				inlineData: {
					data: Buffer.from(imageResp).toString("base64"),
					mimeType: "image/jpeg",
				},
			},
			"The user selected" + user_label + ". Determine whether the image is AI-generated or real. State if the user/`s choice is correct. Provide a confidence score. Include a two-sentence analysis explaining your decision."
 ,
		]);
		
		res.status(200).json({ success: true, data: result });
	}
	catch(error)
	{
		console.log("error in calling gemini api:", error.message, image_url);
		console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "Loaded" : "Not Set");
		res.status(500).json({ success: false, message: "GEMINI_API_KEY:" + process.env.GEMINI_API_KEY ? "Loaded" : "Not Set" });
	}
};