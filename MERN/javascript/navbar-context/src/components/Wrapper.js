import React, { useState, useContext, createContext } from 'react'

export const MyContext = createContext();

const Wrapper = ({ children }) => {
    const [name, setName] = useState("Placeholder");
    return (
        <MyContext.Provider value={{ name, setName }}>
            {children}
        </MyContext.Provider>
    )
}

export default Wrapper