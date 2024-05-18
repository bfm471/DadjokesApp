import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './App.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ 
    error: false,
    msg: ''
  });
  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({ error: true, msg: "Check email and password!" })
        setEmail('');
        setPassword('');
      });
  }


  return (
    <>
      {error.error &&
        <p>{error.msg}</p>
      }
      <div className="text-field">
        <TextField
          id="email"
          type="email"
          label="Email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
          onFocus={() => setError('')}
        />
        <br />
        <TextField
          id="password"
          type="password"
          label="Password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Button variant="outlined" onClick={login}>Log In</Button>
    </>
  )
}