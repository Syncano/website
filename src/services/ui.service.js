import {action} from 'mobx'

export default class UI {
  @action toggleFlag = (flag, value) => {
    if (this.store.flags.has(flag)) {
      this.store.flags.delete(flag)
    } else {
      this.store.flags.set(flag, value)
    }
  }

  @action toggleModal = name => {
    this.store.modal = this.store.modal === name ? null : name
  }

  addHotjar () {
    const isLocal = window.location.hostname === 'localhost'

    if (isLocal) {
      return
    }

    ((h, o, t, j, a, r) => {
      h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) }
      h._hjSettings = {hjid: 108213, hjsv: 5}
      a = o.getElementsByTagName('head')[0]
      r = o.createElement('script'); r.async = 1
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
      a.appendChild(r)
    })(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=')
  }
}
