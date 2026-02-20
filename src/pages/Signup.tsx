import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

declare global {
  interface Window {
    google?: any;
  }
}

export default function Signup() {
  const navigate = useNavigate();
  const { signUp, signInWithGoogle } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [promo, setPromo] = useState(false);

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined;

  useEffect(() => {
    if (!clientId) return;

    const existing = document.getElementById("google-identity-script");
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.id = "google-identity-script";
      s.async = true;
      s.defer = true;
      document.body.appendChild(s);

      s.onload = () => {
        try {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: (res: any) => {
              if (res && res.credential) {
                signInWithGoogle(res.credential).then(() => navigate("/"));
              }
            },
          });

          window.google.accounts.id.renderButton(document.getElementById("google-button"), {
            theme: "outline",
            size: "large",
          });
        } catch (e) {
          console.error(e);
        }
      };
    } else {
      // script already present — try to render
      if (window.google) {
        try {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: (res: any) => {
              if (res && res.credential) {
                signInWithGoogle(res.credential).then(() => navigate("/"));
              }
            },
          });
          window.google.accounts.id.renderButton(document.getElementById("google-button"), {
            theme: "outline",
            size: "large",
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, [clientId, signInWithGoogle, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp({ name, email, password, promo });
    navigate("/");
  };

  // Fallback click if Google client id not set — keep simulated behavior
  const onGoogleFallback = async () => {
    // simulate a google sign-in if environment not configured
    await signInWithGoogle("SIMULATED_TOKEN");
    navigate("/");
  };

  return (
    <main className="section-padding">
      <div className="container-wellness max-w-md mx-auto">
        <h1 className="font-display text-2xl font-bold mb-4">Create an account</h1>

        <div id="google-button" className="mb-4"></div>
        {!clientId && (
          <button onClick={onGoogleFallback} className="w-full mb-4 inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2">
            <img src="/google-logo.png" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
        )}

        <div className="text-center text-sm text-muted-foreground mb-4">or sign up with your email</div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm block mb-1">Username</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="text-sm block mb-1">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="text-sm block mb-1">Password</label>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
          </div>

          <div className="flex items-center gap-2">
            <input id="promo" type="checkbox" checked={promo} onChange={(e) => setPromo(e.target.checked)} />
            <label htmlFor="promo" className="text-sm text-muted-foreground">I agree to receive promotional emails</label>
          </div>

          <div>
            <button type="submit" className="btn-primary w-full">Create account</button>
          </div>
        </form>
      </div>
    </main>
  );
}
