import {action} from 'mobx'

export default class UI {
  @action toggleFlag = (flag, value) => {
    if (this.store.flags.has(flag)) {
      this.store.flags.delete(flag)
    } else {
      this.store.flags.set(flag, value)
    }
  }
}
