import { create } from "zustand";

export const useAIStore = create((set) => ({
	text: "Loading...",
	setGeneratedText: (text) => set({ text }), // Pass an object to set
	createGeneratedText: async (image_url, user_label) => {
		if (!image_url || !user_label) {
			return { success: false, message: "Does not contain all required fields." };
		}

		try {
			const res = await fetch(`/api/ai?image_url=${encodeURIComponent(image_url)}&user_label=${encodeURIComponent(user_label)}`, {
				method: "GET",  // GET request for query parameter
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			const generatedText = data?.data?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "Loading...";
			set({ text: generatedText }); // Use set with an object here
			
			return { success: true, message: "Text created successfully" };
		} catch (error) {
			console.log("Error fetching generated text:", error.message);
			return { success: false, message: "Failed to fetch generated text" };
		}
	},
}));
