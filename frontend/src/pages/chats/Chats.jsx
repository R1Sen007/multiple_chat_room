import React from 'react';
import './chats.css'

import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

import List from './list/list'
import Chat from './chat/chat'


const Chats = () => {
    const [socketUrl, setSocketUrl] = useState(null);
    const [currentRoom, setCurrentRoom] = useState({})

    const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(socketUrl, {});

    return (
        <section id="chats">
            <div className="container chats__container">
                <List
                    setSocketUrl={setSocketUrl}
                    setCurrentRoom={setCurrentRoom}
                />
                <Chat
                    socketUrl={socketUrl}
                    sendMessage={sendMessage}
                    lastMessage={lastMessage}
                    readyState={readyState}
                    getWebSocket={getWebSocket}
                    currentRoom={currentRoom}
                />
            </div>
        </section>
    )
}

export default Chats