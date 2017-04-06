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
    console.log(this.store.modal, name);
    this.store.modal = this.store.modal === name ? null : name
  }
}
