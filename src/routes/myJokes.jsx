import { useState } from "react";
import { app, auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";

export default function MyJokes() {
    const db = getFirestore(app);

    const [jokes, setJokes] = useState([]);
    const [user, setUser] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.uid);
            }
        })
        handleGetJokes(user);
    }, [user]);

    const handleGetJokes = async (user) => {
        try {
            const querySnapshot = await getDocs(collection(db, "jokes" + user));
            const jokeslist = [];
            querySnapshot.forEach((doc) => {
                jokeslist.push({ id: doc.id, ...doc.data() });
            });
            setJokes(jokeslist);
        } catch(e) {
            console.error("Error", e)
        }
    }

    return (
        <>
            <h1>My Jokes</h1>
            <List>
                {jokes.map((joke, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={joke.joke} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}