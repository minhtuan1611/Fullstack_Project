import Conversation from './Conversation'
import { useSelector } from 'react-redux'

const Conversations = () => {
  // const [loading, setLoading] = useState(false)
  const conversations = useSelector((state) => state.user.friends)

  return (
    <div className="conversations">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {/* {loading ? <span className="loadingg"></span> : null} */}
    </div>
  )
}
export default Conversations
