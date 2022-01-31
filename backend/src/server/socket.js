import { io } from '.'

const rooms = {}

io.on("connection", (socket) => {
  socket.on('enter_in_room', (roomID, cb) => {
    socket.join(`${roomID}`)

    const users = []

    const currentUser = {
      id: socket.id,
      name: socket.id.slice(15,)
    }

    if (!!rooms[roomID] && !!rooms[roomID].users.length) {
      const userWithOwner = rooms[roomID].users.map((user, index) => ({ ...user, owner: index === 0 ? user.id : '' }))
      users.push(...userWithOwner, currentUser)
    } else {
      users.push({ ...currentUser, owner: socket.id })
    }
    rooms[roomID] = { users }

    socket.to(roomID).emit('user_enter', users)
    cb(users, socket.id)

    socket.on('disconnect', () => {
      rooms[roomID]['users'] = rooms[roomID]['users'].filter(user => user.id !== socket.id)
    })
  })
  socket.on('play', (roomID, cb) => {
    socket.to(roomID).emit('game_started', roomID)
    cb(roomID)
  })
});

