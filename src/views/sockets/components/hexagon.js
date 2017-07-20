import Icon from './icon.svg'
import Hexagon from '../../../components/ui/hexagon'

export default ({onClick, fill, title}) => (
  <div>
    <div className='Hexagon' title={title} onClick={onClick}>
      <div className='Hexagon__icon'><Icon /></div>
      <Hexagon width={80} fill={fill || '#4c38d0'} />
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

      .Hexagon__icon {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        max-height: 32px;
        max-width: 32px;
        transform: translate(-50%, -50%);
      }

      .Hexagon__icon :global(svg) {
        height: 32px;
        fill: #fff;
      }
    `}</style>
  </div>
)
