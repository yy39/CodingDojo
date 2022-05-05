import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, pw, confirmPw };
        console.log("Welcome", newUser);
    }

    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>PW: </label>
                    <input type="password" onChange={(e) => setPw(e.target.value)} />
                </div>
                <div>
                    <label>Confirm PW: </label>
                    <input type="password" onChange={(e) => setConfirmPw(e.target.value)} />
                </div>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{pw}</p>
                <p>{confirmPw}</p>
            </div>
        </>
    )
}

export default Form