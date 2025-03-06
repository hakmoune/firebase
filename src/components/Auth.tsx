import { useState } from "react";
import { auth, googleProvide } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Utilisateur crée :", userCredential.user);
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvide);
      console.log("Utilisateur crée avec Google :", userCredential.user);
    } catch (error) {
      console.error("Erreur de connexion avec Google :", error);
    }
  };

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email..."
        required
        style={{ marginRight: ".5rem" }}
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password..."
        required
        style={{ marginRight: ".5rem" }}
      />

      <button onClick={signIn}>Sign In</button>
      <button
        onClick={signInWithGoogle}
        style={{ background: "red", color: "white", marginLeft: ".5rem" }}
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default Auth;
