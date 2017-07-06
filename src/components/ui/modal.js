import {Component} from 'react'
import {connect} from 'zefir/utils'

class Modal extends Component {
  componentWillMount (props) {
    window.addEventListener('keydown', this.props.handleEscKey)
  }

  componentWillUnmount (props) {
    window.removeEventListener('keydown', this.props.handleEscKey)
  }

  render () {
    const {
      title, subtitle, children, name, ui, toggle, full, size, noPadding,
      visible, hideClose
    } = this.props

    return ui.modal === name || visible ? (
      <div className={`
        Modal ${ui.modal === name || visible ? 'is-visible' : ''}
        ${full ? 'Modal--full' : ''}
        `}>
        <div className='Modal__bg' onClick={toggle} />
        <div className={
          `Modal__inner
          ${size === 'small' ? 'small' : ''}
          ${size === 'wide' ? 'wide' : ''}
          `
        }>
          <div className={`
            Modal__content
            ${noPadding ? 'no-padding' : ''}
          `}>
            {!hideClose && (
              <span className='Modal__close' onClick={toggle} />
            )}
            {title && (
              <h3 className='Modal__title'>{title}</h3>
            )}
            {subtitle && (
              <p className='Modal__subtitle'>{subtitle}</p>
            )}

            {children}
          </div>
        </div>

        <style jsx>{`
          .Modal {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            will-change: visibility, opacity;
            transition-duration: .25s;
            transition-property: visibility, opacity;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            perspective: 2000px;
          }

          .Modal.is-visible {
            opacity: 1;
            visibility: visible;
          }

          .Modal__bg {
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            opacity: .9;
            position: fixed;
            z-index: -1;
            opacity: 0.85;
            cursor: pointer;
            background-image: linear-gradient(to bottom, #000000, #0b0f15);
          }

          .Modal__inner {
            max-height: 100%;
            display: flex;
          }

          .Modal__content {
            background-color: #ffffff;
            box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
            color: #7a7f87;
            font-size: 16px;
            line-height: 22px;
            padding: 50px 30px 30px;
            position: relative;
            overflow-y: auto;
            will-change: transform, opacity;
            transform: rotate3d(1,1,0,-15deg);
            transform-origin: 100% 0;
            flex-grow: 1;
            transition-duration: .25s;
            transition-property: transform;
          }

          .small {
            max-width: 490px;
          }

          .wide {
            max-width: 970px;
          }

          .is-visible .Modal__content {
            transform: none;
          }

          .Modal__close {
            position: absolute;
            right: 30px;
            top: 30px;
            cursor: pointer;
          }

          .Modal__close::before {
            content: '\\f00d';
            font-family: FontAwesome;
            font-size: 24px;
            color: #7a7f87;
            opacity: 0.25;
            transition: opacity .25s;
          }

          .Modal__close:hover::before {
            opacity: 1;
          }

          .Modal__title {
            font-size: 24px;
            font-weight: 500;
            text-align: center;
            color: #0b0f15;
            margin-bottom: 15px;
          }

          .Modal__subtitle {
            font-size: 16px;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          @media screen and (min-width: 490px) {
            .Modal:not(.Modal--full) {
              display: flex;
              align-items: center;
              justify-content: center;
              padding-top: 30px;
              padding-bottom: 30px;
            }

            .Modal--full .Modal__inner {
              height: 100%;
            }

            .Modal__inner {
              border-radius: 8px;
              overflow: hidden;
              flex: 1;
              max-width: 770px;
              margin-left: 30px;
              margin-right: 30px;
            }

            .Modal__content {
              padding: 50px;
              font-size: 18px;
              line-height: 24px;
            }

            .Modal--full .Modal__inner {
              border-radius: 0;
              max-width: none;
              margin: 0
            }

            .small {
              max-width: 490px;
            }

            .wide {
              max-width: 970px;
            }

            .Modal__title {
              font-size: 32px;
            }
          }

          .no-padding {
            padding: 0;
          }
        `}</style>
      </div>
    ) : null
  }
}

Modal.init = ({
  name,
  router: {history: {push}},
  stores: {ui},
  services: {ui: {toggleModal}},
  toggle,
  ...rest
}) => {
  return {
    name,
    ui,
    toggle: toggle || (() => toggleModal(name)),
    handleEscKey: (e) => {
      if (e.keyCode === 27 && name === 'socket-details') {
        push('/sockets')
      }
    },
    ...rest
  }
}

export default connect(Modal)
