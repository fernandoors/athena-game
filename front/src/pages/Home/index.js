import * as S from './home.styles'
import { useHistory } from "react-router-dom"
import Button from "../../components/button";


export default function Home() {
  const history = useHistory()

  function handleEnter() {
    const room = Math.floor(Math.random() * 16777215).toString(16);
    history.push(`/living-room/${room}`)
  }

  return (
    <S.Container>
      <S.Box>
        <h1>Olá, aqui é a Athena!</h1>
        <p>Nesse jogo veremos seus conhecimentos sobre quando ocorreram certos eventos</p>
        <p>Cria uma sala, chame mais pessoas e vamos descobrir quem sabe mais.</p>
        <Button onClick={handleEnter}>Entrar</Button>
      </S.Box>
    </S.Container>
  )
}
