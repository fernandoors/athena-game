import { useEffect, useState } from 'react'
import { connect, listenMessage, sendMessage } from './service/socket-client';

import './App.css';

function App() {
  const [room, setRoom] = useState('')
  useEffect(() => {
    connect()
    listenMessage('new_user', console.log)
  }, [])
  listenMessage('new_user', console.log)
  const handleClick = () => {
    sendMessage('enter_in_room', room || 1)
  }
  return (
    <div className="App">
      <h1 >Salve Impulso</h1>

      <button onClick={handleClick}>Entrar</button>
      <br />
      <br />
      <br />
      <br />
      <input value={room} onChange={e => setRoom(e.target.value)} />
      <button onClick={handleClick}>Logar</button>
    </div>
  );
}

export default App;
