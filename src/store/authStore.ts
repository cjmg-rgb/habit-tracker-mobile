import { create, StateCreator } from "zustand";
import { IAuth, ICredentials } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthState: StateCreator<IAuth> = (set, get) => ({
  auth: null,
  setCredentials: async (creds: ICredentials) => {
    set({ auth: creds.creds });
    await AsyncStorage.setItem("token", creds.token);
  },
  removeCredentials: async () => {
    set({ auth: null });
    await AsyncStorage.removeItem("token");
  },
});

export const useAuthStore = create<IAuth>()(
  persist(AuthState, {
    name: "auth",
    storage: createJSONStorage(() => AsyncStorage),
  })
);
