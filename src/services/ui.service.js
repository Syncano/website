import {action} from 'mobx'

const STATUS_PAGE_URL = 'https://6l1kzwgr7t06.statuspage.io/api/v2/status.json'
const STATUS_PAGE_TIMEOUT = 5000

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

  @action.bound async fetchServicesStatus () {
    try {
      const res = await this.services.request(STATUS_PAGE_URL)
      const {indicator, description} = res.data.status

      this.store.pageStatus.indicator = indicator
      this.store.pageStatus.description = description

      setTimeout(this.fetchServicesStatus, STATUS_PAGE_TIMEOUT)
    } catch (e) {}
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
