import React, { useState } from 'react'

const Form = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
        setColor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color: </label>
                <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
                <input type="submit" value="Add" />
            </div>
        </form>
    )
}

export default Form