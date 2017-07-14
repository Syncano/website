import Hexagon from './hexagon'
import Avatar from '../../../components/ui/avatar'
import Link from '../../../components/ui/link'

const ListItem = ({item, toggleModal}) => (
  <li key={item.id} className='Socket'>
    <div className='Socket__symbol'>
      <Hexagon title={item.name} />
    </div>
    <div className='Socket__meta'>
      <h3 className='Socket__title'>
        <Link to={`/sockets/${item.name}`}>{item.name}</Link>
      </h3>
      <div className='Socket__author Socket__author--mobile'>
        <Avatar
          size={32}
          email={item.author.display_name}
          />
        <div>{item.author.display_name.split('@')[0]}</div>
      </div>
      <p className='Socket__description'>{
        item.description.length > 70 ? `${item.description.substr(0, 70)}...` : item.description
      }</p>
    </div>
    <div className='Socket__author Socket__author--desktop'>
      <Avatar
        size={32}
        email={item.author.display_name}
        />
      <div>{item.author.display_name}</div>
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
        margin-right: 30px;
        display: none;
      }

      .Socket__meta {
        width: 100%;
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
      }

      .Socket__author--mobile {
        float: right;
      }

      .Socket__author--mobile div {
        padding-left: 5px;
      }

      .Socket__author--mobile :global(img) {
        width: 16px;
        height: auto;
      }

      .Socket__author--desktop {
        display: none;
        padding-left: 20px;
      }

      .Socket__author--desktop div {
        padding-left: 15px;
      }

      .Socket__author--desktop div::before {
        content: 'Made by';
        display: block;
        font-size: 12px;
        line-height: 1.5;
        color: rgba(122, 127, 135, .8);
      }

      @media screen and (min-width: 520px) {
        .Socket__author--mobile {
          display: none;
        }

        .Socket__author--desktop {
          display: flex;
        }

        .Socket__symbol {
          display: inline-block;
        }
      }

      @media screen and (min-width: 921px) {
        .Socket__meta {
          max-width: 340px;
        }

        .Socket__author--desktop {
          min-width: 200px;
        }
      }
    `}</style>
  </li>
)

export default ListItem
