import express from 'express'
import { sendMessage } from '../controllers/message.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()
router.post('/send/:id', verifyToken, sendMessage)

export default router
