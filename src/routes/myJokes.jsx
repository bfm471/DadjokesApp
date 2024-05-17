import { useState } from "react";
import { app, auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect } from "react";
import { IconButton, List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


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

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "jokes" + user, id));
        handleGetJokes(user);
    }

    return (
        <>
            <h1>My Jokes</h1>
            <List>
                {jokes.map((joke) => (
                    <ListItem key={joke.id} secondaryAction={
                        <IconButton color="primary" edge="end" aria-label="delete" onClick={() => handleDelete(joke.id)}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <ListItemText primary={joke.joke} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}