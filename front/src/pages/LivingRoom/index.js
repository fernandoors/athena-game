import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { connect, disconnect, listenMessage, sendMessage } from "../../service/socket-client"

import Button from '../../components/button'
export default function LivingRoom() {
  const history = useHistory()
  const [me, setMe] = useState([])
  const [copied, setCopied] = useState('')
  const [users, setUsers] = useState([])
  const { room } = useParams()

  function handleNewUsers(usersData, own) {
    setMe(own)
    setUsers(usersData)
  }
  useEffect(() => {
    listenMessage('game_started', roomID => history.push(`/play/${roomID}`))
    listenMessage('user_enter', data => setUsers(data))
  }, [])
  useEffect(() => {
    connect()
    sendMessage('enter_in_room', room, handleNewUsers)
    return disconnect()
  }, [room])

  useEffect(() => {
    if (!!copied) {
      let id = setInterval(() => {
        setCopied('');
      }, 3000);
      return () => clearInterval(id);
    }
  }, [copied])

  function handlePlay() {
    sendMessage('play', room, () => history.push(`/play/${room}`))
  }
  function handleCopy() {
    navigator.clipboard.writeText(window.location.href)
    setCopied('URL Copied')
  }
  return (
    <div>
      <h1 >Livigin Room: <Button onClick={handleCopy}> {room} </Button> {copied} </h1>
      <h2>Me: {me} </h2>
      <ul>
        {users.length ?
          users.map(user => (
            <li key={user.id}>User: {user.name} {me === user.owner ?
              <Button onClick={handlePlay}>Play</Button>
              : null} </li>
          ))
          : null}
      </ul>
    </div>
  )
}
