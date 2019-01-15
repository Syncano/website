const hostingDemo = (demo) => {
  const url = 'https://my-project.com'

  return demo
    .openApp('terminal', {
      minHeight: '350px',
      promptString: '~/my-project$',
      windowTitle: '~/my-project',
      id: 'hosting-1'
    })
    .commandWithDelay('npx s hosting:sync website', 500)
    .respond(p(`Syncing hosting files for ${cyan('website')}`))
    .respondWithDelay(p(url), 800)
    .respond('\n')
    .respondWithDelay(p(green('✓') + p('File added: index.html')), 500)
    .respondWithDelay(p(green('✓') + p('File added: main.js')), 500)
    .respond('\n')
    .respond(p(`${cyan('2')} files synchronized, ${cyan('185 kB')} in total`))
    .respond(p(green('website') + p(`is available at: ${green(url)}`)))
    .respondWithDelay('', 500)
    .openApp('website', {
      minHeight: '350px',
      windowTitle: url,
      id: 'hosting-2'
    })
    .print('Hello World'.bold())
}
