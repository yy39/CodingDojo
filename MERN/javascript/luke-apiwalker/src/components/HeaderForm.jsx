import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HeaderForm = () => {
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
        clearForm();
    };

    const clearForm = () => {
        setId('');
        setCategory('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option hidden>Choose a category</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
            </form>
        </div>
    )
}

export default HeaderForm