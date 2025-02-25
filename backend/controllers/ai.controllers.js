import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateContent = async (req, res) => {
	const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

	const input = req.body;
	if(!input.image_url)
	{
		return res.status(400).json({ success: false, message: "Please provide image_url" });
	}
	
	try
	{
		const imageResp = await fetch(input.image_url)
			.then((response) => response.arrayBuffer());

		const result = await model.generateContent([
			{
				inlineData: {
					data: Buffer.from(imageResp).toString("base64"),
					mimeType: "image/jpeg",
				},
			},
			'Is this image AI generated or not? Give a confidence score on your rating.',
		]);
		res.status(200).json({ success: true, data: result });
	}
	catch(error)
	{
		console.log("error in calling gemini api:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};