import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }

  // console.log(email);

  return (
    <>
      <TextField
        id="email"
        type="email"
        label="Email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={login}>Kirjaudu</Button>
    </>
  )
}