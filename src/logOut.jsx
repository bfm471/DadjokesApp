import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  }

  return (
    <Button onClick={handleLogout} variant="outlined">
      Logout
    </Button>
  );
}
