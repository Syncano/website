const green = (str) => {
  return `<span style="color: green">${str}</span>`
}
const cyan = (str) => {
  return `<span style="color: cyan">${str}</span>`
}

const p = (str) => {
  if (!isNaN(str)) {
    p.indent = str
    return p
  }
  return `<span style="margin-left: ${p.indent*3}">${str}</span>`
}
p.indent = 4

const setupDemo = (demo) => {
  demo.respondWithDelay = function (str, delay) {
    return this.respond(str, {onCompleteDelay: delay})
  }
  demo.commandWithDelay = function (str, delay) {
    return this.command(str, {onCompleteDelay: delay})
  }
}

const highlight = (lang, code) => {
  return Prism.highlight(code, Prism.languages[lang], lang)
}

