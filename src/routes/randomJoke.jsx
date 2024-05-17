import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import { app, auth } from '../firebaseConfig';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


export default function RandomJoke() {
    const db = getFirestore(app);
    const [joke, setJoke] = useState('');
    const [user, setUser] = useState('');
    const [added, setAdded] =useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.uid);
            }
        })
    }, []);

    const getRandomJoke = () => {
        setAdded(false);
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                setJoke(data.joke)
            })
            .catch(error => console.error(error))
    }

    const handleSave = async () => {
        try {
            const docRef = await addDoc(collection(db, "jokes" + user), {
                joke: joke
            });
            setAdded(true);
        } catch (e) {
            console.error("Error", e);
        }
    }

    return (
        <>
            <h1>Dadjokes</h1>
            <p>Get yours now</p>
            <p><Button variant="outlined" onClick={getRandomJoke}>Random joke</Button></p>
            {joke && <p>{joke}</p>}
            <p><Button variant='text' onClick={handleSave}>Like this joke? Save it for later!</Button></p>
            { added &&
            <p>Saved!</p>}
        </>
    );
}