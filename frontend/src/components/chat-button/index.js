import React from "react";

function LinkChatButton ({
    name,
    func,
}) {
    const onClick = () => {
        func(name);
    }

    return (
        <button name={name} className='btn btn-primary' onClick={onClick}>{name}</button>
    )
}

export default LinkChatButton