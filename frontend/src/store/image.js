import {create} from "zustand";

export const useImageStore = create((set) => ({
	images: [],
	setImages: (images) => set({images}),
	fetchImages: async () => {
		const res = await fetch("/api/images");
		const data = await res.json();
		set({images: data.data});
	}
}));