import PropTypes from 'prop-types'
import useConversation from '../../zustand/useConversation'
import UserImage from '../UserImage'
import useGetLastMessage from '../../hooks/useGetLastMessage'

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const isSelected = selectedConversation?._id === conversation._id
  const { lastMessage } = useGetLastMessage(conversation._id)

  const getTimeDifference = (timestamp) => {
    if (!timestamp) return ''
    const now = new Date()
    const date = new Date(timestamp)
    const diffInSeconds = Math.floor((now - date) / 1000)

    const days = Math.floor(diffInSeconds / (3600 * 24))
    const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((diffInSeconds % 3600) / 60)
    const seconds = diffInSeconds % 60

    if (days > 0) return `${days}d `
    if (hours > 0) return `${hours}h ${minutes}m`
    if (minutes > 0) return `${minutes}m `
    return `${seconds}s `
  }

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
            {lastMessage ? getTimeDifference(lastMessage.createdAt) : ''}
            {lastMessage ? lastMessage.message : ''}
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
