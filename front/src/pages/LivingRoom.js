import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { connect, disconnect, listenMessage, sendMessage } from "../service/socket-client"

export default function LivingRoom() {
  const [users, setUsers] = useState([])
  const { room } = useParams()

  function handleNewUsers(usersData) {
    setUsers(usersData)
  }

  useEffect(() => {
    listenMessage('user_enter', handleNewUsers)
  }, [])

  useEffect(() => {
    connect()
    sendMessage('enter_in_room', room, handleNewUsers)
    return disconnect()
  }, [room])

  return (
    <div>
      <h1>Livigin Room: {room}</h1>
      <ul>
        {users.length ?
          users.map(user => (
            <li key={user.id}>User: {user.name} </li>
          ))
          : null}
      </ul>
    </div>
  )
}
