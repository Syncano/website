const usersDemo = (demo) => {
  const classesYMLCode = `
classes:
  user:
    # username and password fields are built-in
    - name: email
      type: string
    - name: firstname
      type: string
      target: lastname`

  const classesYMLCodeHighlighted = Prism.highlight(
    classesYMLCode,
    Prism.languages.yaml,
    'yaml'
  )

  const code = highlight('js',`
// Create user
await user.create({
  username: 'tyler.durden',
  password: 'operation-mayhem123',
  email: 'tyler@fightclub.org'
})`)

  return demo
    .openApp('editor', {
      minHeight: '350px',
      windowTitle: 'my_project',
      id: 'users-1'
    })
    .write(classesYMLCodeHighlighted)
    .openApp('editor', {
      minHeight: '350px',
      windowTitle: '~/my_project/syncano/user/src/create.js',
      id: 'users-2'
    })
    .write(code)
}
