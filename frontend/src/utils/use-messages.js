import { useState } from "react";


export default function useMessages () {
    const [ messages, setMessages ] = useState([])
    const [ messagesPage, setMessagesPage ] = useState(1)
    const [ messagesLimit, setMessagesLimit ] = useState(50)
    const [ messagesOffset, setMessagesOffset ] = useState(0)

    return {
        messages,
        setMessages,
        messagesPage,
        setMessagesPage,
        messagesLimit,
        setMessagesLimit,
        messagesOffset,
        setMessagesOffset,
      }
}