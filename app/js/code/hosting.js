const hostingSync = (demo) => {
  return demo
    .openApp('terminal', {minHeight: '350px', promptString: '~/my_project$', windowTitle: 'my_project'})
    .commandWithDelay('npx s hosting:sync website', 500)
    .respond(p(`Syncing hosting files for ${cyan('website')}`))
    .respondWithDelay(p('https://website--my_project.eu1.syncano.site'), 800)
    .respond('\n')
    .respondWithDelay(p(green('✓') + p('File added: index.html')), 500)
    .respondWithDelay(p(green('✓') + p('File added: 0.aac71a8c248af5c854cc.js')), 500)
    .respond('\n')
    .respond(p(`${cyan('2')} files synchronized, ${cyan('185 kB')} in total`))
    .respond(p(green('website') + p(`is available at: ${green('https://website--my_project.eu1.syncano.site')}`)))
}
