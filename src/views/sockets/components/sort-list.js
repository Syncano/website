import Menu from '../../../components/ui/menu'

const SortList = ({items, active, direction, handleClick}) => (
  <div>
    <Menu>
      {items.map(item => (
        <a
          key={item}
          className={`
            Item
            ${active === item ? 'active' : ''}
            ${direction ? `is-${direction}` : ''}
          `}
          onClick={() => handleClick(item)}
          >{item}</a>
      ))}
    </Menu>

    <style jsx>{`
      div :global(.Item) {
        padding-left: 30px;
        transition: background-color .25s;
      }

      div :global(.Item:hover) {
        background-color: #fafafa;
      }

      div :global(.Item::before) {
        position: relative;
        left: -15px;
        content: '\\f061';
        font-family: FontAwesome;
        transition: transform .25s;
        font-size: 14px;
        color: rgba(122, 127, 135, .5);
      }

      div :global(.Item.active.is-asc::before) {
        transform: rotate(-90deg);
      }

      div :global(.Item.active.is-desc::before) {
        transform: rotate(90deg);
      }

      div :global(.Menu__item::before) {
        display: none;
      }

      @media screen and (min-width: 560px) and (max-width: 920px) {
        div :global(.Menu) {
          display: flex;
        }

        div :global(.Menu__item) {
          flex: 1;
        }

        div :global(.Menu__item) + :global(.Menu__item) {
          border-top: 0;
          border-left: 1px solid #e5e5e5;
        }

        div :global(.Item.active::after) {
          transform: rotate(90deg);
        }
      }
    `}</style>
  </div>
)

export default SortList
