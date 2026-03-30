import { createContext, useContext, useState, ReactNode } from "react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  department: string;
  avatarUrl: string;
}

interface ProfileContextType {
  profile: UserProfile;
  updateProfile: (data: Partial<UserProfile>) => void;
  isLoggedIn: boolean;
  logout: () => void;
  login: () => void;
}

const defaultProfile: UserProfile = {
  name: "Admin User",
  email: "admin@complaintdesk.com",
  phone: "+91 98765 43210",
  department: "Customer Support",
  avatarUrl: "",
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const stored = localStorage.getItem("user_profile");
    return stored ? JSON.parse(stored) : defaultProfile;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const updateProfile = (data: Partial<UserProfile>) => {
    setProfile((prev) => {
      const updated = { ...prev, ...data };
      localStorage.setItem("user_profile", JSON.stringify(updated));
      return updated;
    });
  };

  const logout = () => setIsLoggedIn(false);
  const login = () => setIsLoggedIn(true);

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, isLoggedIn, logout, login }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be within ProfileProvider");
  return ctx;
}
