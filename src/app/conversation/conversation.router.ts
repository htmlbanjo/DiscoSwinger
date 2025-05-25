import { Router } from 'express'
import { URL } from 'url'
import { CONVERSATION_ENDPOINT } from '@constants/endpoint'
import { getConversationSome, getConversationOne } from './conversation.service'
// Export module for registering router in express app
export const router: Router = Router()

// getConversationSome
router.get(CONVERSATION_ENDPOINT + '/', async (req, res) => {
  res.status(200).send({
    conversations: await getConversationSome(req?.query)
  })
})

// getConversationOne
router.get(CONVERSATION_ENDPOINT + '/:conversationId', async (req, res) => {
  //const routes = getRoutes();
  res.status(200).send({
    conversations: await getConversationOne(
      parseInt(req.params.conversationId),
      req?.query
    )
  })
})
