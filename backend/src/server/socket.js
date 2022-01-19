import { io } from '.'

io.on("connection", (socket) => {
  socket.on('enter_in_room', (data, cb) => {
    socket.join(`${data}`)
    cb('ID da sala recebida pelo back: ', data)
  })
});

