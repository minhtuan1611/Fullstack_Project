import PropTypes from 'prop-types'
import useConversation from '../../zustand/useConversation'
import UserImage from '../UserImage'
import useGetLastMessage from '../../hooks/useGetLastMessage'
import { truncateMessage, getTimeDifference } from 'utils/message'

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const isSelected = selectedConversation?._id === conversation._id
  const { lastMessage } = useGetLastMessage(conversation._id)

  return (
    <>
      <div
        className={`conversation ${isSelected ? 'selected' : ''}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <UserImage image={conversation.picturePath} size="55px" />
        <div className="conversation-details">
          <div className="details-top">
            <p className="font">{conversation.firstName}</p>
          </div>
          <p className="message-content">
            {lastMessage ? truncateMessage(lastMessage.message) : ''}
            {lastMessage ? getTimeDifference(lastMessage.createdAt) : ''}
          </p>
        </div>
      </div>

      {!lastIdx && <div className="divider" />}
    </>
  )
}

Conversation.propTypes = {
  conversation: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    picturePath: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
  }).isRequired,
  lastIdx: PropTypes.bool.isRequired,
}

export default Conversation
