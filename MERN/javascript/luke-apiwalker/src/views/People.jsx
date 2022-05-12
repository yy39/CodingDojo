import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = () => {
    const { id } = useParams();
    const [person, setPerson] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data);
                setPerson(response.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            {
                person
                    ? <div>
                        <h1>
                            {person.name}
                        </h1>
                        <p>Height: {person.height}</p>
                        <p>Mass: {person.mass}</p>
                        <p>Hair Color: {person.hair_color}</p>
                        <p>Skin Color: {person.skin_color}</p>
                    </div>
                    : <h1>Searching...</h1>
            }
        </div>
    )
}

export default People