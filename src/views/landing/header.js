import Logo from '../../components/logo'

export default () => (
  <div className='header'>
    <div className='header__bar'>
      <Logo />
      <ul className='nav'>
        <li className='nav-item'>
          <a href=''>Product</a>
          <div className='dropdown'>
            <ul className='nav nav--stack'>
              <li className='nav-item'>
                <a className='nav-link' href=''>Automation SDK</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''>Socket Registry</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''>Clout OS</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href=''>Community</a>
              </li>
            </ul>
          </div>
        </li>
        <li className='nav-item'>
          <a href=''>Plans &amp; Pricing</a>
        </li>
        <li className='nav-item'>
          <a href=''>Documentation</a>
        </li>
        <li className='nav-item'>
          <a href=''><i className='fa fa-github' /></a>
          <a href=''><i className='fa fa-slack' /> 128</a>
        </li>
      </ul>
      <ul className='nav'>
        <li className='nav-item'>
          <a href='' className='nav-item'>All systems operational</a>
        </li>
        <li className='nav-item'>
          <a href='' className='nav-item'>Sign in</a>
        </li>
        <li className='nav-item'>
          <a href='' className='nav-item'>Sign up</a>
        </li>
      </ul>
    </div>

    <h1 className='title'>Software development on steroids</h1>
    <h2 className='subtitle'>Deploy your API in 60 seconds.</h2>

    <a href='' className='button'>SIgn up now</a>

    <div className='separator' data-after='or' />

    <a href=''>Download the CLI</a>
  </div>
)
