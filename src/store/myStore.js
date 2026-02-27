import { create } from 'zustand';

export const useMystore = create((set, get) => ({
    userData: {},
    setUserData: (values) => set({ userData: values })
}))