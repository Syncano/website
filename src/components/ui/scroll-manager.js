import {Component} from 'react'

class ScrollManager extends Component {
  componentDidMount (prevProps) {
    const isLocal = window.location.hostname === 'localhost'

    if (!isLocal) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return null
  }
}

export default ScrollManager
