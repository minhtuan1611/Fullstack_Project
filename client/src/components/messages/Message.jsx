import PropTypes from 'prop-types'
// import { useState } from 'react'
// import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime'
import useConversation from '../../zustand/useConversation'
import { useSelector } from 'react-redux'

const Message = ({ message }) => {
  // const { authUser } = useAuthContext()
  const { _id, profilePic } = useSelector((state) => state.user)
  const { selectedConversation } = useConversation()
  const fromMe = message.senderId === _id
  const formattedTime = extractTime(message.createdAt)
  const profilePicc = fromMe ? profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'blue' : 'white'
  const shakeClass = message.shouldShake ? 'shake' : ''

  return fromMe ? (
    <div className="chat chat-end">
      <div className="chat-message-container">
        <div className={`chat-message ${bubbleBgColor} ${shakeClass}`}>
          {message.message}
        </div>
        <div className="chat-time">{formattedTime}</div>
      </div>
      <div className="chat-avatar">
        <img alt="user picture" src={profilePicc} />
      </div>
    </div>
  ) : (
    <div className="chat chat-start">
      <div className="chat-avatar">
        <img alt="user picture" src={profilePic} />
      </div>
      <div className="chat-message-container">
        <div className={`chat-message ${bubbleBgColor} ${shakeClass}`}>
          {message.message}
        </div>
        <div className="chat-time">{formattedTime}</div>
      </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    senderId: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    shouldShake: PropTypes.bool,
  }).isRequired,
}

export default Message
