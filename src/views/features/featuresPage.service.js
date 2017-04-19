import {action} from 'mobx'

export default class {
  @action.bound setActiveSection (value) {
    this.store.activeSection = value
  }
}
