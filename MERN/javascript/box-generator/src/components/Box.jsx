import React from 'react'

const Box = (props) => {
    return (
        <div>
            {
                props.boxes.map((box, i) => <div style={{
                    display: "inline-block", overflowWrap: "normal",
                    width: 50, height: 50, margin: "auto", backgroundColor: box
                }} key={i} >{box}</div>)
            }
        </div>
    )
}

export default Box