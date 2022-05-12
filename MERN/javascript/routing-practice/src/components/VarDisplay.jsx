import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VarDisplay = () => {
    const { pathVar, textColor, bgColor } = useParams();

    return (
        <div id='div' style={{ color: textColor, backgroundColor: bgColor }}>
            {
                isNaN(pathVar)
                    ? `The word is: ${pathVar}`
                    : `The number is: ${pathVar}`
            }
        </div>
    )
}

export default VarDisplay