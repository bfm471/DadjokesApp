import { useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function MyJokes() {

    const [jokes, setJokes] = useState([]);
    const [user, setUser] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.uid);
            }
        })
    }, []);

    const getMyJokes = () => {
        
    }

    return(
        <>
        My Jokes here
        </>
    );
}