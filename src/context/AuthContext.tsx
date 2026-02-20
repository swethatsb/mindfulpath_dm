import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
  provider?: string;
};

type AuthContextValue = {
  user: User | null;
  signUp: (payload: { name: string; email: string; password: string; promo?: boolean }) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("mp_user");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("mp_user", JSON.stringify(user));
    else localStorage.removeItem("mp_user");
  }, [user]);

  const signUp = async ({ name, email }: { name: string; email: string; password?: string; promo?: boolean }) => {
    // In a real app you'd call an API. Here we simulate success.
    const newUser: User = { name, email, provider: "local" };
    setUser(newUser);
    return Promise.resolve();
  };

  const signInWithGoogleToken = async (credential: string) => {
    try {
      // Decode JWT payload without validation (for demo only). In production, verify token server-side.
      const payload = JSON.parse(atob(credential.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
      const googleUser: User = { name: payload.name || payload.email, email: payload.email, provider: "google" };
      setUser(googleUser);
    } catch (e) {
      console.error("Failed to decode Google credential", e);
    }
    return Promise.resolve();
  };

  const signOut = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signUp, signInWithGoogle: signInWithGoogleToken, signOut }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
