import { Router } from 'express'
import { CONVERSATION_DIALOG_ENDPOINT } from '@constants/endpoint'
import { getDialogSome, getDialogOne } from './conversation-dialog.service'
// Export module for registering router in express app
export const router: Router = Router()

// getDialogSome
router.get(CONVERSATION_DIALOG_ENDPOINT + '/', async (req, res) => {
  res.status(200).send({
    dialogs: await getDialogSome(req?.query)
  })
})

// getDialogOne
router.get(CONVERSATION_DIALOG_ENDPOINT + '/:dialogId', async (req, res) => {
  //const routes = getRoutes();
  res.status(200).send({
    dialogs: await getDialogOne(parseInt(req.params.dialogId), req?.query)
  })
})
