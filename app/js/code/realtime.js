const realtimeHandler = (demo) => {
  const code = highlight('yaml', `
endpoints:
  stream:
    description: Endpoint connected to real-time channel
    channel: chat
`)

  return demo
    .openApp('editor', {
      minHeight: '350px',
      windowTitle: '~/my_project/syncano/logs/socket.yml',
      id: 'realtime-1'
    })
    .write(code)
}

const realtimeSend = (demo) => {
  const code = highlight('js', `
// Publish message to real-time channel
await channel.publish('chat', {message: 'Operation started!'})
`)
  return demo
    .openApp('editor', {
      minHeight: '350px',
      windowTitle: '~/my_project/syncano/chat/src/send.js',
      id: 'realtime-2'
    })
    .write(code)
}

const realtimeSubscribe = (demo) => {
  const code = highlight('js', `
// Publish message to real-time channel
syncano.listen('chat/stream')
  .addEventListener('message', function(chatMessage) {
    // Handle message here
    console.log('New message!', chatMessage)
  })
`)

  return demo
    .openApp('editor', {
      minHeight: '350px',
      windowTitle: '~/my_project/src/app.js',
      id: 'realtime-3'
    })
    .write(code)
}

const realtimeDemo = {
  realtimeHandler,
  realtimeSubscribe,
  realtimeSend,
}
