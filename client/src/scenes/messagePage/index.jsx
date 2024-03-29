import MessageContainer from '../../components/messages/MessageContainer'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../navbar'

import './index.css'

const MessagePage = () => {
  return (
    <div>
      <Navbar />
      <div className="message-box p-4 mt-20 flex items-center justify-center">
        <div className="custom-message-box">
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
    </div>
  )
}

export default MessagePage
