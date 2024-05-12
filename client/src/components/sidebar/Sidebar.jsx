import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchInput />
      <div className="dividerr"></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}
export default Sidebar
