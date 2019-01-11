const demo = new GDemo('#terminal')
setupDemo(demo)

// hostingSync(demo).end()
// databaseClasses(demo).end()
// databaseSocketCreate(demo).end()

// usersDemo.userCreate(demo).end()
// realtimeDemo.realtimeSubscribe(demo).end()

demo
  .openApp('website', {minHeight: '350px', windowTitle: '~/my_project/syncano/user/src/create.js'})
  .print(highlight('js', JSON.stringify({
    test: 123,
    aaa: 'bbb'
  }, null, 2)))
  .end()
