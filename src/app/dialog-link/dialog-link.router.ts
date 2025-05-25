import { Router } from 'express'
import { CONVERSATION_LINK_ENDPOINT } from '@constants/endpoint'
import { getDialogLinkSome } from './dialog-link.service'
// Export module for registering router in express app
export const router: Router = Router()

// getDialogLinkSome
router.get(CONVERSATION_LINK_ENDPOINT + '/', async (req, res) => {
  res.status(200).send({
    dialogs: await getDialogLinkSome(req?.query)
  })
})
