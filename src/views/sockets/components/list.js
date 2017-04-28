import {connect} from 'zefir/utils'
import Loader from '../../../components/ui/loader'
import ListItem from './list-item'

const List = ({store, pending, toggleDetailsModal}) => (
  <div>
    <ul className='Socket-list'>
      {pending.has('sockets.fetch') ? (
        <div className='Socket-list__loader'>
          <div>
            <Loader />
            <div className='Socket-list__loader-text'>Loading sockets&hellip;</div>
          </div>
        </div>
      )
      : store.sortedItems.length === 0 ? (
        <div className='Socket-list__empty'>No sockets found</div>
      )
      : store.sortedItems.map(item => (
        <ListItem key={item.id} item={item} toggleModal={toggleDetailsModal} />
      ))}
    </ul>

    <style jsx>{`
      div {
        flex: 1;
      }

      .Socket-list {
        list-style: none;
      }

      .Socket-list__empty {
        text-align: center;
        margin-top: 70px;
        color: #7a7f87;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
      }

      .Socket-list__loader {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-top: 60px;
      }

      .Socket-list__loader-text {
        color: #7a7f87;
        margin-top: 15px;
        font-size: 14px;
      }
    `}</style>
  </div>
)

List.init = ({
  services: {ui: {toggleModal}},
  stores: {
    sockets: store,
    pending
  }
}) => ({
  store,
  pending,
  toggleDetailsModal: () => toggleModal('socket-details')
})

export default connect(List)
