import {action, runInAction} from 'mobx'

const SOCKETS_LIST = `${process.env.SYNCANO_REGISTRY_URL}/registry/list/`;
const SOCKETS_GET = `${process.env.SYNCANO_REGISTRY_URL}/registry/get/`;

export default class {
  @action.bound async fetch () {
    const {pending} = this.stores

    pending.set('sockets.fetch')

    const res = await this.services.request.get(SOCKETS_LIST)

    runInAction(() => {
      pending.delete('sockets.fetch')
      this.store.items = res.data
    })
  }

  @action.bound async fetchSocket ({name, version}) {
    const {pending} = this.stores

    pending.set('sockets.fetchSocket')

    const res = await this.services.request.get(SOCKETS_GET, {
      params: {
        name, version
      }
    })

    runInAction(() => {
      pending.delete('sockets.fetchSocket')
      this.store.details = res.data
    })
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
