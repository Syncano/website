import Color from 'color'
import Icon from './icon.svg'
import Hexagon from '../../../components/ui/hexagon'

export default ({onClick, fill, title, icon}) => (
  <div>
    <div className='Hexagon' title={title} onClick={onClick}>
      <div className='Hexagon__icon'>
        {icon
          ? <img className="Hexagon__img" src={icon} alt=""/>
          : <Icon />}
      </div>
      <svg
        className='Hexagon__bg'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        viewBox='-4 0 90 80'
        filter={`drop-shadow(0px 0px 10px ${Color(fill).fade(0.5).rgb().string()})`}
      >
        <defs>
          <linearGradient id={`grad-${fill}`} x1="50%" y1="100%" x2="0%" y2="0%">
            <stop offset="0" stopColor={fill} />
            <stop offset="1" stopColor={Color(fill).lighten(.5).string()}/>
          </linearGradient>
        </defs>
        <polygon
          points='20,5.36 60,5.36 80,40 60,74.64 20,74.64 0,40'
          style={{
            stroke: 'none',
            fill: `url(#grad-${fill})`
          }}
        />
      </svg>
    </div>

    <style jsx>{`
      div {
        display: inline-block;
        vertical-align: top;
      }

      .Hexagon {
        display: block;
        position: relative;
        font-size: 16px;
        width: 80px;
        cursor: pointer;
      }

      .Hexagon__bg {
        vertical-align: top;
      }

      .Hexagon__icon {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        max-height: 32px;
        z-index: 1;
        max-width: 32px;
        transform: translate(-50%, -50%);
      }

      .Hexagon__img {
        width: 100%;
      }

      .Hexagon__icon :global(svg) {
        height: 32px;
        fill: #fff;
      }
    `}</style>
  </div>
)
