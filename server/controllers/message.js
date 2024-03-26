export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const { id } = req.params
    const senderId = req
  } catch (error) {
    console.log('Error in sendMessage controller: ', error.message)
    res.status(400).json({ error: 'Internal Server Error' })
  }
}
