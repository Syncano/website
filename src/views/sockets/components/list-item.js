import Icon from './icon.svg'
import Hexagon from '../../../components/ui/hexagon'
import Avatar from '../../../components/ui/avatar'

const ListItem = ({item}) => (
  <li key={item.id} className='Socket'>
    {item.config.url ? (
      <a className='Socket__symbol' title={item.name} href={`${item.config.url}#readme`}>
        <div className='Socket__icon'><Icon /></div>
        <Hexagon width={80} fill='#4c38d0' />
      </a>
    ) : (
      <div className='Socket__symbol' title={item.name}>
        <div className='Socket__icon'><Icon /></div>
        <Hexagon width={80} fill='#4c38d0' />
      </div>
    )}
    <div className='Socket__meta'>
      <h3>
        {item.config.url ? (
          <a className='Socket__title' href={`${item.config.url}#readme`}>{item.name}</a>
        ) : (
          <span className='Socket__title'>{item.name}</span>
        )}
      </h3>
      <p className='Socket__description'>{
        item.description.length > 70 ? `${item.description.substr(0, 70)}...` : item.description
      }</p>
    </div>
    <div className='Socket__author'>
      <Avatar
        size={32}
        email={item.author.display_name}
        />
      <div>{item.author.display_name.split('@')[0]}</div>
    </div>

    <style jsx>{`
      .Socket {
        display: flex;
        align-items: center;
      }

      .Socket + .Socket {
        border-top: solid 1px #e5e5e5;
        padding-top: 15px;
        margin-top: 15px;
      }

      .Socket__symbol {
        position: relative;
        font-size: 16px;
        display: inline-block;
        width: 80px;
        margin-right: 30px;
      }

      .Socket__icon {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        max-height: 32px;
        max-width: 32px;
        transform: translate(-50%, -50%);
      }

      .Socket__icon :global(svg) {
        height: 32px;
        fill: #fff;
      }

      .Socket__meta {
        max-width: 340px;
        padding-right: 20px;
        width: 100%;
      }

      .Socket__title {
        font-weight: 400;
        text-decoration: none;
        font-size: 18px;
        color: #0b0d11;
        transition: color .25s;
      }

      a.Socket__title {
        color: #3871d0;
      }

      a.Socket__title:hover {
        color: #0b0d11;
      }

      .Socket__description {
        font-size: 14px;
        line-height: 1.29;
        color: #8d9299;
        margin-top: 7px;
      }

      .Socket__author {
        display: flex;
        min-width: 200px;
        font-size: 14px;
        line-height: 1.29;
        color: rgba(47, 51, 57, .8);
      }

      .Socket__author div {
        padding-left: 15px;
      }

      .Socket__author div::before {
        content: 'Made by';
        display: block;
        font-size: 12px;
        line-height: 1.5;
        color: rgba(122, 127, 135, .8);
      }
    `}</style>
  </li>
)

export default ListItem
