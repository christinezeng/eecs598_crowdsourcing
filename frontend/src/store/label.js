import { create } from "zustand";

export const useLabelStore = create((set) => ({
	label: {},
	setLabel: (label) => set({ label }),
	createLabel: async (newLabel) => {
		if (!newLabel.user_id || !newLabel.image_id || !newLabel.label) {
			return { success: false, message: "Does not contain fields." };
		}
		const res = await fetch("/api/userlabels", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newLabel),
		});
		const data = await res.json();
		set({label: data.data});
		return { success: true, message: "Label created successfully" };
	},
	updateLabel: async (user_id, image_id, updatedLabel) => {
		const res = await fetch(`/api/userlabels/${user_id}/${image_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedLabel),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: "Could not update label entry" };

		set({ label: data.data });

		return { success: true, message: data.data };
	},
}));