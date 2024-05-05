import { useState } from "react";



export default function useRooms () {
    const [ rooms, setRooms ] = useState([])
    const [ roomsPage, setRoomsPage ] = useState(1)
    const [ roomsLimit, setRoomsLimit ] = useState(6)


    return {
        rooms,
        setRooms,
        roomsPage,
        setRoomsPage,
        roomsLimit,
        setRoomsLimit,
      }
}