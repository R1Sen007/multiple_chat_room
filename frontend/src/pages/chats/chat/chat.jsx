import React, { useEffect, useRef } from 'react';
import { ReadyState } from 'react-use-websocket';

import './chat.css'

import handleClickSendMessage from '../list/list';
import api from '../../../api';
import { useMessages } from '../../../utils';


const Chat = ({
    socketUrl,
    sendMessage,
    lastMessage,
    readyState,
    getWebSocket,
    currentRoom,
}) => {
    const textArea = useRef()
    const inputMessage = useRef()
    const {
        messages,
        setMessages,
        messagesPage,
        setMessagesPage,
        messagesLimit,
        setMessagesLimit,
        messagesOffset,
        setMessagesOffset,
    } = useMessages()

    const getPastMessages = ({
        page = 1,
        limit = 50,
        offset = 0,
        room
    }) => {
        api.getMessagesData({page, limit, offset, room})
            .then(res => {
                const { results, count } = res
                setMessages(results)
            })
    }

    const sendHendler = () => {
        const message = JSON.stringify({
            'message': inputMessage.current.value
        });
        sendMessage(message)
        inputMessage.current.value = '';
    }

    const printMessage = (username, time, text) => {
        const time_msg = new Date(time)
        const hours = time_msg.getHours() < 10 ? `0${time_msg.getHours()}` : time_msg.getHours()
        const minutes = time_msg.getMinutes() < 10 ? `0${time_msg.getMinutes()}` : time_msg.getMinutes()

        textArea.current.value += (`\n${username}[${hours}:${minutes}]: ${text}` + '\n');
        textArea.current.scrollTop = textArea.current.scrollHeight;
    }

    useEffect(() => {
        if (readyState === ReadyState.OPEN){
            getPastMessages({
                page:messagesPage,
                limit:messagesLimit,
                offset:messagesOffset,
                room:currentRoom,
            })

            getWebSocket().onmessage = (e) => {
                const msg = JSON.parse(e.data);
                printMessage(msg.username, msg.time_mark, msg.message)
            }
        }
    }, [readyState])

    useEffect(_ => {
        textArea.current.value = ``
        
        messages.reverse().map(message => {
            printMessage(message.sender.username, message.pub_date, message.text)
        })
    }, [messages]);

    return (
        <div className="container chat__container">
            <textarea className ="chat__textarea" name="chat" id="chat-log" ref={textArea} cols="30" rows="10"/>
            {(readyState === ReadyState.OPEN)&&
                <nav className='chat_nav'>
                    <input id="chat-message-input" placeholder="Write message..." ref={inputMessage} type="text" size="100"/>
                    <input id="chat-message-submit" type="button" value="Send" onClick={sendHendler}/>
                </nav>
            }
        </div>
    )
}

export default Chat