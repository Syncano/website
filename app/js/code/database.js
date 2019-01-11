const createClasses = (demo) => {
  const code = highlight('yaml', `
classes:
  book:
    - name: book_title
      type: string
    - name: author
      type: reference
      target: author
    - name: publish_date
      type: datetime
  author:
    - name: name
      type: string
`)

  return demo
    .openApp('editor', {minHeight: '350px', windowTitle: '~/my_project/syncano/books/socket.yml'})
    .write(code)
}

const createSocket = (demo) => {
  const code = highlight('js', `
const book = await data.book.create({
  book_title: ctx.args.title,
  publish_date: new Date()
})

response.json(book)`)

  return demo
    .openApp('editor', {minHeight: '350px', windowTitle: 'my_project/syncano/books/socket.js'})
    .write(code)
}

const databaseDemo = {
  createClasses,
  createSocket
}
