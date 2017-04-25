import {connect} from 'zefir/utils'
import SortList from './sort-list'
import Search from './search'

const Sidebar = ({
  store: {sortDirection, sortBy},
  handleSortChange
}) => (
  <aside className='Sidebar'>
    <div className='Search'>
      <Search />
    </div>

    <h4 className='Sidebar__title'>Order sockets</h4>
    <div className='Sidebar__box'>
      <SortList
        handleClick={handleSortChange}
        direction={sortDirection}
        active={sortBy}
        items={['None', 'Name', 'Author']}
        />
    </div>

    <style jsx>{`
      .Sidebar {
        max-width: 270px;
        width: 100%;
      }

      .Sidebar__title {
        font-size: 14px;
        color: #8d9299;
        font-weight: normal;
        margin-bottom: 8px;
      }

      .Sidebar__box {
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(11, 15, 21, 0.1);
        border: solid 1px rgba(11, 15, 21, 0.07)
      }

      .Sidebar :global(.Menu__item::before) {
        content: '\\f061';
      }

      .Search {
        margin-bottom: 15px
      }
    `}</style>
  </aside>
)

Sidebar.init = ({
  stores: {sockets: store},
  services: {sockets}
}) => ({
  store,
  handleSortChange: (name) => {
    if (name === store.sortBy) {
      sockets.toggleSortDirection()
    }

    sockets.sortBy(name)
  }
})

export default connect(Sidebar)
