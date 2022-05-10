import React from 'react';
import axios from 'axios';

const Button = ({ fetchAction }) => {
    const handleFetch = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=809")
            .then(response => { fetchAction(response.data.results) });
    }

    return (
        <div>
            <input type="button" value="Fetch Pokemon" onClick={handleFetch} />
        </div>
    )
}

export default Button