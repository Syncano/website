import {computed, observable} from 'mobx'
import get from 'lodash.get'

export default {
  @observable search: null,
  @observable sortBy: 'None',
  @observable sortDirection: 'desc',
  @observable items: [],
  @computed get sortedItems () {
    const sorter = composeSorter(this.sortBy, this.sortDirection)
    let items = this.items.sort(sorter)

    if (this.search) {
      items = items.filter(item => new RegExp(this.search, 'ig').test(item.name))
    }

    return items
  }
}

const composeSorter = (sortBy, direction) => {
  const isDesc = direction === 'desc'
  const key = {
    None: 'created_at',
    Name: 'name',
    Author: 'author.display_name'
  }[sortBy]

  return (a, b) => {
    if (get(a, key).toLowerCase() < get(b, key).toLowerCase()) return isDesc ? 1 : -1
    if (get(a, key).toLowerCase() > get(b, key).toLowerCase()) return isDesc ? -1 : 1

    return 0
  }
}
