import React, { useContext } from 'react'
import { MyContext } from './Wrapper'

const Navbar = () => {
    const context = useContext(MyContext)

    return (
        <div>Uh... Hi {context.name}</div>
    )
}

export default Navbar