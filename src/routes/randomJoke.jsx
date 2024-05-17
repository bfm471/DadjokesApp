import React, { useState } from 'react';
import { Button } from "@mui/material";

export default function RandomJoke() {
    const [joke, setJoke] = useState('');

    const getRandomJoke = () => {
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

    return (
      <>
        <h1>Dadjokes</h1>
        <p>Get yours now</p>
            <p><Button variant="outlined" onClick={getRandomJoke}>Random joke</Button></p>
            {joke && <p>{joke}</p>}
      </>
    );
}