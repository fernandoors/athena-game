import socketio from 'socket.io-client'

const socket = socketio('http://localhost:3000', { autoConnect: false })

function connect() {
  socket.connect()
}
function disconnect() {
  if (socket.connected) {
    socket.disconnect()
  }
}
function sendMessage(key = '', data = {}, cb = console.log) {
  socket.emit(key, data, cb)
}

function listenMessage(key = '', cb = console.log) {
  socket.on(key, cb)
}

export {
  connect,
  disconnect,
  sendMessage,
  listenMessage
}
