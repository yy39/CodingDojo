import React from 'react'

const ToDoList = (props) => {
    const { todos, deleteAction, toggleAction } = props;

    const handleDelete = (targetTodo) => {
        deleteAction(targetTodo);
    }

    const handleToggle = (targetTodo) => {
        toggleAction(targetTodo);
    }


    return (
        <>
            {
                todos.map((todo, i) => {
                    return <div key={i} style={todo.isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                        {todo.content}
                        <input onClick={(e) => handleToggle(todo)} type="checkbox" checked={todo.isDone} />
                        <input onClick={(e) => handleDelete(todo)} type="button" value="Delete" />
                    </div>
                })
            }
        </>
    )
}

export default ToDoList