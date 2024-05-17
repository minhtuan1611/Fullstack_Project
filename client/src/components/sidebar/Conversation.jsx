import PropTypes from 'prop-types'
// import { useSocketContext } from '../../context/SocketContext'
import useConversation from '../../zustand/useConversation'
import UserImage from '../UserImage'

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  // const { onlineUsers } = useSocketContext()
  // const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
      <div
        className={`conversation ${isSelected ? 'selected' : ''}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* <div className={`avatar ${isOnline ? 'online' : ''}`}> */}
        {/* <div className="avatar-img">
          <img
            src={`http://localhost:3001/assets/${conversation.picturePath}`}
            alt="user avatar"
          />
        </div> */}
        <UserImage image={conversation.picturePath} size="55px" />
        {/* </div> */}

        <div className="conversation-details">
          <div className="details-top">
            <p className="font">{conversation.firstName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider" />}
    </>
  )
}

Conversation.propTypes = {
  conversation: PropTypes.shape({
    _id: PropTypes.string,
    picturePath: PropTypes.string,
    firstName: PropTypes.string,
  }),
  lastIdx: PropTypes.bool,
}

export default Conversation
