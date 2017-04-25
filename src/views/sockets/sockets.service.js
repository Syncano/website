import {action} from 'mobx'

const SOCKETS_LIST = 'https://socket-registry.syncano.space/registry/list-public/'

export default class {
  @action.bound async fetch () {
    const {pending} = this.stores

    pending.set('sockets.fetch')
    const res = await this.services.request.get(SOCKETS_LIST)
    pending.delete('sockets.fetch')
    this.store.items = res.data
  }

  @action.bound async toggleSortDirection () {
    this.store.sortDirection = this.store.sortDirection === 'desc' ? 'asc' : 'desc'
  }

  @action.bound async sortBy (name) {
    this.store.sortBy = name
  }

  @action.bound async search (value) {
    this.store.search = value
  }
}
