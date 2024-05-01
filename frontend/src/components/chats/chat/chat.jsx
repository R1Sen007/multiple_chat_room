import React from 'react';

import './chat.css'
import handleClickSendMessage from '../list/list';


const Chat = () => {
    return (
        <div className="container chat__container">
            {/* <h5>CHAT</h5> */}
            <textarea className ="chat__textarea" name="chat" id="chat-log" cols="30" rows="10"/>
            <nav className='chat_nav'>
                <input id="chat-message-input" placeholder="Write message..." type="text" size="100"/>
                <input id="chat-message-submit" type="button" value="Send"/>
                {/* <button className="btn btn-primary">Send</button> */}
            </nav>
        </div>
    )
}

export default Chat