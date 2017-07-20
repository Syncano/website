import {connect} from 'zefir/utils'
import {action} from 'mobx'
import Input from '../../../components/ui/input'

const Search = ({store, search, handleSearch, handleClear}) => (
  <div className='Search'>
    <Input full white {...search} onChange={handleSearch} clearable handleClear={handleClear} />

    {store.sortedItems.length > 0 && search.value && (
      <div className='Search__result'>
        <b>{store.sortedItems.length} sockets found</b> for "<b>{search.value}</b>"
      </div>
    )}

    <style jsx>{`
      .Search {
        margin-bottom: 78px;
      }

      .Search__result {
        margin-top: 30px;
        text-align: center;
        color: #7a7f87;
        margin-bottom: -48px;
      }
    `}</style>
  </div>
)

Search.init = ({
  form: {fields: {search}, setValue},
  stores: {
    sockets: store
  },
  services: {sockets}
}) => ({
  search,
  store,
  handleSearch: (e) => {
    sockets.search(e.target.value)
    setValue(e)
  },
  handleClear: () => {
    setValue('search', '')
    sockets.search('')
  }
})

Search.form = {
  formName: 'SocketsSearchForm',
  fields: (props) => ({
    search: {
      type: 'search',
      placeholder: 'Search for Syncano Sockets'
    }
  })
}

export default connect(Search)
