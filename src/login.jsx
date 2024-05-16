import { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import TextField from '@mui/material/TextField';


function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState('');
  const [_, setUser] = useState("");

  const handleLogin = async (FormEvent) => {
    // e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user.email);
      });
      console.log("Kirjautuminen onnistui");
      setMsg("Kirjautuneena " + email)
    } catch (error) {
      console.log("Kirjautuminen epäonnistui", error);
      setMsg("Kirjautuminen epäonnistui")
    }
    setEmail('');
    setPassword('');
    setShowMsg(true);
  }

  console.log("MOI", email, password, msg)

  return (
    <div>
      <h2>Kirjaudu sisään</h2>
      {showMsg &&
        <h4>{msg}</h4>
      }
      <form onSubmit={handleLogin}>
        <div>
          <TextField
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={event => setEmail(event.target.value)}
            onFocus={() => setShowMsg(false)}
            required
          />
          <br />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Kirjaudu sisään</button>
      </form>
    </div>
  );
}

export default LoginForm;