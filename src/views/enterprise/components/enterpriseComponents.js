import Logo from '../../../components/ui/logo'

const EnterpriseComponents = () => (
  <div className='Section u-wrapper'>
    <div className="EntComponents">
      <div className="EntComponent">
        <div className="EntComponent__logo">
          <Logo />
        </div>
        <div className="EntComponent__title">Cloud Tech</div>
        <div className="EntComponent__list">
          <ul>
            <li>Iterate faster with less resources thanks to the developer friendly Syncano Automation SDK</li>
            <li>Reuse your code and connect legacy IT with Syncano Sockets</li>
            <li>Scale instantaneously to thousands of users with Syncano Cloud OS</li>
            <li>Don’t reinvent the wheel. Browse Syncano Socket Registry and reuse solutions created by the community</li>
          </ul>
        </div>
      </div>
      <div className="EntComponent">
        <div className="EntComponent__logo">
          <Logo />
        </div>
        <div className="EntComponent__title">Crowdsourced Development</div>
        <div className="EntComponent__list">
          <ul>
            <li>Embrace the digital transformation with the power of crowdsourcing. Get access to a pool of 60.000 Syncano Developers</li>
            <li>Launch MVPs faster with smaller teams thanks to our innovative work methodologies</li>
            <li>Have our innovation specialists guide you through the process</li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      .Section {
        min-height: 500px;
      }

      .EntComponents {
        display: flex;
        justify-content: center;
        margin: 120px 0 70px;
      }

      .EntComponent {
        max-width: 427px;
        margin: 0 74px;
      }

      .EntComponent__logo {
        width: 181px;
        margin-bottom: 12px;
      }

      .EntComponent__title {
        font-size: 24px;
        height: 28px;
        color: #0b0f15;
        margin-bottom: 34px;
      }

      .EntComponent__list ul {
        list-style: none
      }

      .EntComponent__list li {
        color: #8d9299;
        font-size: 20px;
        line-height: 1.5;
        max-width: 368px;
        text-indent: -3em;
        margin-bottom: 14px;
      }

      .EntComponent__list li:before {
          content: '';
          display: inline-block;
          height: 28px;
          width: 28px;
          -webkit-mask-image: url(/../../../static/img/enterprise/check-circle.svg);
          mask-image: url(/../../../static/img/enterprise/check-circle.svg);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          margin-right: 1.6em;
          background-color: #3cdc9e;
          vertical-align: middle;
      }
    `}</style>
  </div>
)

export default EnterpriseComponents
