import React, { useState } from 'react'

const Form = (props) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleNewTodo(input);
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default Form