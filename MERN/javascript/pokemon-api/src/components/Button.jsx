import React from 'react'

const Button = (props) => {
    const handleFetch = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=809")
            .then(response => {
                return response.json();
            }).then(responseJson => {
                props.fetchAction(responseJson.results);
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <input type="button" value="Fetch Pokemon" onClick={handleFetch} />
        </div>
    )
}

export default Button