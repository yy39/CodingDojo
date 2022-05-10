import React, { useState, useContext } from 'react'
import { MyContext } from './Wrapper';

const Form = () => {
    const [input, setInput] = useState('');
    const context = useContext(MyContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        context.setName(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        </form>
    )
}

export default Form