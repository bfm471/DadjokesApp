import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    createUserWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
         
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }


  return (
    <>
    <p>
      <TextField
        id="email"
        type="email"
        label="Email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
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
      </p>
      <Button onClick={login}>Register</Button>
    </>
  )
}