import Hexagon from './hexagon'
import Avatar from '../../../components/ui/avatar'
import Link from '../../../components/ui/link'

const ListItem = ({item, toggleModal}) =>
  <li key={item.id} className="Socket">
    <div className="Socket__symbol">
      <Link to={`/sockets/${item.name}`}>
        <Hexagon title={item.name} fill={item.icon.background} />
      </Link>
    </div>
    <div className="Socket__meta">
      <h3 className="Socket__title">
        <Link to={`/sockets/${item.name}`}>
          {item.name}
        </Link>
      </h3>
      <p className="Socket__description">
        {item.description.length > 140
          ? `${item.description.substr(0, 140)}...`
          : item.description}
      </p>
      <div className="Socket__author">
        <Avatar size={16} email={item.author.display_name} />
        <div className="Socket__author-name">
          {item.author.display_name}
        </div>
      </div>
    </div>

    <style jsx>{`
      .Socket {
        display: flex;
        align-items: top;
      }

      .Socket + .Socket {
        border-top: solid 1px #e5e5e5;
        padding-top: 15px;
        margin-top: 15px;
      }

      .Socket__symbol {
        margin-right: 30px;
        display: none;
      }

      .Socket__title {
        font-weight: 400;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        color: #0b0d11;
        transition: color .25s;
      }

      .Socket__title a {
        color: #0b0d11;
        transition: color .25s;
      }

      .Socket__title a:hover {
        text-decoration: none;
        color: #3871d0;
      }

      .Socket__description {
        font-size: 14px;
        line-height: 1.29;
        color: #8d9299;
        margin-top: 7px;
      }

      .Socket__author {
        display: flex;
        font-size: 14px;
        line-height: 1.29;
        color: rgba(47, 51, 57, .8);
        align-items: center;
        margin-top: 7px;
      }

      .Socket__author-name {
        margin-left: 7px;
      }

      @media screen and (min-width: 720px) {
        .Socket__symbol {
          display: inline-block;
        }
      }
    `}</style>
  </li>

export default ListItem
