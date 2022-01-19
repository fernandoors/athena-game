import socketio from 'socket.io-client'

const socket = socketio('http://localhost:3000', { autoConnect: false })

function connect() {
  socket.connect()
}

function sendMessage(key, data, cb = console.log) {
  socket.emit(key, data, cb)
}

function listenMessage(key, data, cb = console.log) {
  socket.on(key, data, cb)
}

export {
  connect,
  sendMessage,
  listenMessage
}
