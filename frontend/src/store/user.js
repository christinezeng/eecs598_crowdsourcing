import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

export const useUserStore = create()(
	persist(
		(set) => ({
			user: {},
			setUser: (user) => set({user}),
			createUser: async () => {
				const res = await fetch("/api/users", {
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					}
				});
				const data = await res.json();
				set({user: data.data});
				return {success: true, message:"User created successfully"};
			}
		}),
		{
			name: 'user-store',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
);