const eventHandler = (demo) => {
  const code = highlight('yaml', `
event_handlers:
  events.email.email-received:
      description: Listens for 'email-received' events
      file: email_processor.js
`)

  return demo
    .openApp('editor', {minHeight: '350px', windowTitle: '~/my_project/syncano/email/socket.yml'})
    .write(code)
}

const eventEmit = (demo) => {
  const code = highlight('js',`
// Emit event with payload
event.emit('email-received', {id: 1337, subject: 'Operation Mayhem'})
`)
  return demo
    .openApp('editor', {minHeight: '350px', windowTitle: '~/my_project/syncano/email/src/webhook.js'})
    .write(code)
}

const eventDemo = {
  eventHandler,
  eventEmit,
}
