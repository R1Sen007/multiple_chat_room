import React from 'react';
import './list.css'
import { useState, useEffect, useContext } from 'react';
import useWebSocket from 'react-use-websocket';

import { UserContext } from '../../../contexts'
import { useRooms } from '../../../utils';
import LinkChatButton from '../../../components/chat-button';
import api from '../../../api';


// const WS_URL = window.location.href.replace('http://', 'ws://').replace('https://', 'wss://').replace(':3000', ':8000') + 'ws/' + 'chat/' + 'testroom/';
const WS_URL = `ws://localhost:8000/ws/chat/`;


const List = ({setSocketUrl, setCurrentRoom}) => {
    const [loading, setLoading] = useState()

    const {
        rooms,
        setRooms,
        roomsPage,
        setRoomsPage,
        roomsLimit,
        setRoomsLimit, 
    } = useRooms()

    const getRooms = ({ page = 1, limit = 6 }) => {
        api.getRoomsData({ page, limit })
            .then(res => {
                const { results, count } = res
                setRooms(results)
            })
    }

    useEffect(_ => {
        getRooms({ page: roomsPage, limit: roomsLimit })
    }, [roomsPage])


    const userContext = useContext(UserContext)

    const sendHendler = (name) => {
        setLoading(true);
        setCurrentRoom(name)
        setSocketUrl(WS_URL + name + `/?` + userContext.id)
    }
    

    return (
        <div className="container list__container">
            <h5>LIST</h5>

            {rooms.map( room => <LinkChatButton
                {...room}
                name = {room.name}
                func = {sendHendler}
            />)}
        </div>
    )
}

export default List