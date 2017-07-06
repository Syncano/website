const Footer = ({toggleModal, smallSpacing}) => (
  <div className={`
    AuthForm__footer
    ${smallSpacing ? 'AuthForm__footer--small-spacing' : ''}
  `}>
    <div>
      By signing up you confirm that you accept our <a href='/#/terms-of-service' target='_blank' rel='noopener noreferrer'>Terms of Use</a>
    </div>

    <div>
      Already a member? <a onClick={() => {
        window.analytics.track('Sign in Website')
        toggleModal('signin')
      }}>Sign in here</a>
    </div>
  </div>
)

export default Footer
