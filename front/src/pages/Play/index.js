import { useParams } from "react-router-dom"

import Button from '../../components/button'
export default function Play() {
  const { room } = useParams()

  return (
    <div>
      <h1 >Livigin Room: <Button> {room} </Button>  </h1>
    </div>
  )
}
