import { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import Message from './Message'

// eslint-disable-next-line react/prop-types
const Messages = ({ onLastMessageUpdate }) => {
  const { messages, loading } = useGetMessages()
  const lastMessageRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [messages])

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1]
      onLastMessageUpdate(lastMessage.message)
    }
  }, [messages, onLastMessageUpdate])

  return (
    <div className="messages">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <div
            key={message._id}
            ref={idx === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="messages-text">
          Send a message to start the conversation!
        </p>
      )}
    </div>
  )
}

export default Messages
