import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axios } from 'axios';

const People = () => {
    const { id } = useParams();
    const [person, setPerson] = useState();

    useEffect(() => {
        axios.get()
            .then(response => {
                console.log(response.data);
                setPerson(response.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>People</div>
    )
}

export default People