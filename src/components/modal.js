import {connect} from 'zefir/utils'

const Modal = ({
  title, subtitle, children, name, ui, toggle
}) => (
  <div className={`Modal ${ui.modal === name ? 'is-visible' : ''}`}>
    <div className='Modal__bg' onClick={toggle} />
    <div className='Modal__content'>
      <span className='Modal__close' onClick={toggle} />
      {title && (
        <h3 className='Modal__title'>{title}</h3>
      )}
      {subtitle && (
        <p className='Modal__subtitle'>{subtitle}</p>
      )}

      {children}
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
        background-image: linear-gradient(to bottom, #000000, #0b0f15);
      }

      .Modal__content {
        background-color: #ffffff;
        box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);;
        color: #7a7f87;
        font-size: 16px;
        line-height: 22px;
        padding: 50px 30px 30px;
        position: relative;
        max-height: 100%;
        overflow: auto;
      }

      .Modal__close {
        position: absolute;
        right: 30px;
        top: 30px;
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
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }

      @media screen and (min-width: 780px) {
        .Modal {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .Modal__content {
          border-radius: 8px;
          padding: 50px;
          font-size: 18px;
          line-height: 24px;
          max-width: 770px;
          flex: 1;
        }

        .Modal__title {
          font-size: 32px;
        }
      }
    `}</style>
  </div>
)

Modal.init = ({
  name,
  stores: {ui},
  services: {ui: {toggleModal}},
  ...rest
}) => {
  return {
    name,
    ui,
    toggle: () => toggleModal(name),
    ...rest
  }
}

export default connect(Modal)
