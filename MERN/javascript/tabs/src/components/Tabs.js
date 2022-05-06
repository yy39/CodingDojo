import React, { useState } from 'react'

const Tabs = (props) => {
    const [content, setContent] = useState('')

    const clickHandler = (e, item) => {
        setContent(item.content);
    }

    return (
        <>
            <div>
                {
                    props.items.map((item, i) => {
                        return <div key={item.label} onClick={(e) => clickHandler(e, item)}>{item.label}</div>
                    })
                }
            </div>
            <textarea value={content}></textarea>
        </>
    )
}

export default Tabs