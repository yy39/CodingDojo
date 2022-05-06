import React, { useReducer } from 'react'

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={state.name} onChange={handleChange} />
                {state.firstName.error !== null && (
                    <p>{state.firstName.error}</p>
                )}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={state.name} onChange={handleChange} />
                {state.lastName.error !== null && (
                    <p>{state.lastName.error}</p>
                )}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={state.name} onChange={handleChange} />
                {state.email.error !== null && (
                    <p>{state.email.error}</p>
                )}
            </div>
        </div>
    )
}

export default Form