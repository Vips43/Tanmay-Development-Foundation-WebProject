import { create } from "zustand";
import {
  works,
  agriculturalProjects,
  navBarLis,
  educationRoles,
} from "../data/data.js";

const apiUrl = import.meta.env.VITE_API_URL;

export const useMystore = create((set) => ({
  userData: {},
  submitForm: async (value) => {
    try {
      const res = await fetch(`${apiUrl}/user/form-submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData: value }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Submission failed");

      console.log("Submission successfull", data);
      set({ userData: value });
      return { success: true, message: data.message };
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
      return { success: false, message: err.message };
    }
  },

  donors: [],
  fetchDonors: async () => {
    try {
      const res = await fetch(`${apiUrl}/user/donors`);
      if (!res.ok) throw new Error("Failed to fetch donors");

      const data = await res.json();
      
      set({ donors: data, success: true });
    } catch (err) {
      console.log("error is: ", err);
    }
  },

  // Initialize state directly with imported data
  work: works,
  agrProjects: agriculturalProjects,
  navLis: navBarLis,
  roles: educationRoles,

  resetStore: () =>
    set({
      work: works,
      agrProjects: agriculturalProjects,
      navLis: navBarLis,
      roles: educationRoles,
    }),
}));
