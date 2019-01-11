const databaseClasses = (demo) => {
  const classesYMLCode = `
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
  `

  const classesYMLCodeHighlighted = Prism.highlight(
    classesYMLCode,
    Prism.languages.yaml,
    'yaml'
  )

  return demo
    .openApp('editor', {minHeight: '350px', windowTitle: 'my_project'})
    .write(classesYMLCodeHighlighted)
}

const databaseSocketCreate = (demo) => {
  const classesYMLCode = `
const book = await data.book.create({
  book_title: ctx.args.title,
  publish_date: new Date()
})

response.json(book)`

  const classesYMLCodeHighlighted = Prism.highlight(
    classesYMLCode,
    Prism.languages.js,
    'js'
  )
  return demo
    .openApp('editor', {minHeight: '350px', windowTitle: 'my_project/socket.yml'})
    .write(classesYMLCodeHighlighted)
}
