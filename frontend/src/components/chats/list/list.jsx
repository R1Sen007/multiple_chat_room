import React from 'react';
import { Fragment, useState, useEffect, useCallback } from 'react';

import useWebSocket from 'react-use-websocket';

import './list.css'


const WS_URL = window.location.href.replace('http://', 'ws://').replace('https://', 'wss://').replace(':3000', ':8000') + 'ws/' + 'chat/' + 'testroom/';



const List = () => {
    const [loading, setLoading] = useState()
    const [socketUrl, setSocketUrl] = useState(null);

    const sendHendler = e => {
        setLoading(true);

        setSocketUrl(WS_URL)

        // console.log(socketUrl)
        
    }
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
        onOpen: () => {
          document.querySelector('#chat-log').value += ('WebSocket connection established.' + '\n');
        },
        onMessage: (e) => {
            const msg = JSON.parse(e.data);
        //   if (msg["type"] === 'refresh') {
        //       setToastMsg("Refreshing list")
        //       setShowToast(true)
        //       resetState();
        //   }
            document.querySelector('#chat-log').value += (`${msg.username}: ${msg.message}` + '\n');
        },
        onClose: (e) => {
            document.querySelector('#chat-log').value += (`Oops! Smth goes wrong! status: ${e.code}` + '\n');
        },
      });

    // const handleClickSendMessage = useCallback(() => sendMessage('hello'), []);
      useEffect(()=>{
        document.querySelector('#chat-message-submit').onclick = (e) => {
            const messageInputDom = document.querySelector('#chat-message-input');
            const message = JSON.stringify({
                'message': messageInputDom.value
            });
            console.log(message)
            sendMessage(message)
            messageInputDom.value = '';
        }
      });
    

    return (
        <div className="container list__container">
            <h5>LIST</h5>
            {/* <a href="" className="btn btn-primary">JOIN CHAT</a> */}
            <button className='btn btn-primary' onClick={sendHendler}>JOIN CHAT</button>
        </div>
    )
}

export default List