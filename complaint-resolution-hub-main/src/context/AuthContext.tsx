import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type UserRole = "user" | "admin";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  userName: string | null;
  userEmail: string | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored auth on mount
  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) {
      try {
        const auth = JSON.parse(stored);
        setIsAuthenticated(true);
        setUserRole(auth.role);
        setUserName(auth.name);
        setUserEmail(auth.email);
      } catch (error) {
        localStorage.removeItem("auth_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    try {
      // Simulate API call with validation
      // In production, this would call an actual authentication API
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      // Simple validation - in production this would be server-side
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isValidEmail) {
        throw new Error("Invalid email format");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      // Simulate delay for API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // For demo purposes, accept any valid email/password combination
      const name = email.split("@")[0];

      const authData = {
        email,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        role,
      };

      localStorage.setItem("auth_user", JSON.stringify(authData));
      setIsAuthenticated(true);
      setUserRole(role);
      setUserName(authData.name);
      setUserEmail(email);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_user");
    setIsAuthenticated(false);
    setUserRole(null);
    setUserName(null);
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        userName,
        userEmail,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
