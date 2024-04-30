import React from 'react';
import './chats.css'

import List from './list/list'
import Chat from './chat/chat'


const Chats = () => {
    return (
        <section id="chats">
            <h5>Chats section</h5>
            <div className="container chats__container">
                <List/>
                <Chat/>
            </div>
        </section>
    )
}

export default Chats