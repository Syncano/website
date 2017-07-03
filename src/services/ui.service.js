import {action} from 'mobx'

const STATUS_PAGE_URL = 'https://6l1kzwgr7t06.statuspage.io/api/v2/status.json'
const STATUS_PAGE_TIMEOUT = 5000

export default class UI {
  @action.bound toggleFlag (flag, value) {
    if (this.store.flags.has(flag)) {
      this.store.flags.delete(flag)
    } else {
      this.store.flags.set(flag, value)
    }
  }

  @action.bound toggleModal (name) {
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

  getOptimizelyModalName (baseName, className) {
    const suffix = String(className)
      .replace(/[\r\n]+/g, '')
      .split(' ')
      .find(item => /version/.test(item))

    return `${baseName}-${suffix || 'version1'}`
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

  addSegment (writeKey) {
    const isLocal = window.location.hostname === 'localhost'

    if (isLocal) {
      window.analytics = {
        page: () => {},
        track: () => {}
      }

      return
    }

    if (!writeKey) {
      return
    }

    // eslint-disable-next-line
    var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";}
    analytics.load(writeKey)
    window.analytics.ready(function () {
      if (window.analytics.user().id()) {
        window.analytics.identify()
      }
    })
  }
}
