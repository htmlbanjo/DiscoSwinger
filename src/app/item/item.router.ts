import { Router } from 'express'
import { ITEM_ENDPOINT } from '@constants/endpoint'
import { getItemSome, getItemOne } from './item.service'
// Export module for registering router in express app
export const router: Router = Router()

// getItemSome
router.get(ITEM_ENDPOINT + '/', async (req, res) => {
  res.status(200).send({
    items: await getItemSome()
  })
})

// getItemOne
router.get(ITEM_ENDPOINT + '/:itemId', async (req, res) => {
  //const routes = getRoutes();
  res.status(200).send({
    items: await getItemOne(parseInt(req.params.itemId))
  })
})
