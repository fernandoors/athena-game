import { useHistory } from "react-router-dom"

export default function Home() {
  const history = useHistory()

  function handleEnter() {
    history.push('/living-room/room1')
  }

  return (
    <div>
      <h1>Salve Impulso</h1>
      <button onClick={handleEnter}>Entrar</button>
    </div>
  )
}
