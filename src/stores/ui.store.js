import {observable} from 'mobx'

export default {
  @observable pageStatus: {
    description: null,
    indicator: null
  },
  @observable modal: null,
  flags: observable.map()
}
