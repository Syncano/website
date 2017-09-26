export function findOffsetTop (obj) {
  var curtop = 0

  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop
    } while ((obj = obj.offsetParent))

    return [curtop - 55]
  }
}

export function scrollTo (id) {
  window.scroll(0, findOffsetTop(document.getElementById(id)))
}
