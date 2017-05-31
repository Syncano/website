import {connect} from 'zefir/utils'
import Input from '../../../components/ui/input'

const Search = ({search, handleSearch}) => (
  <div className='Search'>
    <Input full white {...search} onChange={handleSearch} />
  </div>
)

Search.init = ({
  form: {fields: {search}, setValue},
  services: {sockets}
}) => ({
  search,
  handleSearch: (e) => {
    sockets.search(e.target.value)
    setValue(e)
  }
})

Search.form = {
  formName: 'SocketsSearchForm',
  fields: {
    search: {
      placeholder: 'Search for Search'
    }
  }
}

export default connect(Search)
