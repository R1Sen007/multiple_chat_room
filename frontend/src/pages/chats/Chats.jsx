import React from 'react';
import './chats.css'

import { useState, useEffect} from 'react';
import useWebSocket from 'react-use-websocket';

import List from './list/list'
import Chat from './chat/chat'


const Chats = () => {
    const [socketUrl, setSocketUrl] = useState(null);
    const [currentRoom, setCurrentRoom] = useState({})

    const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(socketUrl, {
        // onOpen: () => {
        //   document.querySelector('#chat-log').value += ('WebSocket connection established.' + '\n');
        // },
        // onMessage: (e) => {
        //     const msg = JSON.parse(e.data);
        //     const time_msg = new Date(msg.time_mark)

        //     document.querySelector('#chat-log').value += (`${msg.username}[${time_msg.getHours()}:${time_msg.getMinutes()}]: ${msg.message}` + '\n');
        // },
        // onClose: (e) => {
        //     document.querySelector('#chat-log').value += (`Oops! Smth goes wrong! status: ${e.code}` + '\n');
        // },
    });

    // useEffect(()=>{
    //     document.querySelector('#chat-message-submit').onclick = (e) => {
    //         const messageInputDom = document.querySelector('#chat-message-input');
    //         const message = JSON.stringify({
    //             'message': messageInputDom.value
    //         });
    //         sendMessage(message)
    //         messageInputDom.value = '';
    //     }
    // });


    return (
        <section id="chats">
            <h5>Chats section</h5>
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