import { io } from '.'

const rooms = {}

io.on("connection", (socket) => {
  socket.on('enter_in_room', (roomID, cb) => {
    socket.join(`${roomID}`)

    const users = [{ id: socket.id, name: socket.id.slice(15,) }]

    if (!!rooms[roomID] && !!rooms[roomID].users) {
      users.push(...rooms[roomID].users)
    }
    rooms[roomID] = { users }

    socket.to(roomID).emit('user_enter', users)
    cb(users)

    socket.on('disconnect', () => {
      rooms[roomID]['users'] = rooms[roomID]['users'].filter(user => user.id !== socket.id)
    })
  })
});

