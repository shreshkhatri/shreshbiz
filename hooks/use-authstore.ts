import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { produce } from "immer";

type User = {
  id: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  country?: string;
  city?: string;
  postcode?: string;
  address_line1?: string;
  address_line2?: string;
};

type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (userData: Partial<User>) => void;
  logout: () => void;
};

export const useAuth = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (userData) =>
        set(
          produce((state: AuthStore) => {
            if (state.user) {
              state.user = { ...state.user, ...userData };
            }
          })
        ),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
