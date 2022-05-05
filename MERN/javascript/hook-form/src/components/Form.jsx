import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pw, setPw] = useState("");
    const [pwError, setPwError] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [confirmPwError, setConfirmPwError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, pw, confirmPw };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        if (e.target.value.length < 1) {
            setPwError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPwError("Password must be at least 8 characters!");
        } else if (e.target.value !== confirmPw) {
            setPwError("Passwords must be matching!");
        } else {
            setPwError("");
        }
    }

    const handleConfirmPw = (e) => {
        setConfirmPw(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPwError("Password is required!");
        } else if (e.target.value.length < 8) {
            setConfirmPwError("Password must be at least 8 characters!");
        } else if (e.target.value !== pw) {
            setConfirmPwError("Passwords must be matching!");
        } else {
            setConfirmPwError("");
        }
    }

    return (
        <>
            <form onSubmit={createUser}>
                {hasBeenSubmitted
                    ? <h3>Thank you for submitting the form!</h3>
                    : <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {firstNameError
                        ? <p>{firstNameError}</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                    {lastNameError
                        ? <p>{lastNameError}</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={handleEmail} />
                </div>
                {emailError
                    ? <p>{emailError}</p>
                    : ''
                }
                <div>
                    <label>PW: </label>
                    <input type="password" onChange={handlePw} />
                </div>
                {pwError
                    ? <p>{pwError}</p>
                    : ''
                }
                <div>
                    <label>Confirm PW: </label>
                    <input type="password" onChange={handleConfirmPw} />
                </div>
                {confirmPwError
                    ? <p>{confirmPwError}</p>
                    : ''
                }
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