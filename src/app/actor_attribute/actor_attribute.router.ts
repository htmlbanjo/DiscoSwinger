import { Router } from 'express'
import { ACTOR_ATTR_ENDPOINT } from '@constants/endpoint'
import { getActorAttrSome, getActorAttrOne } from './actor_attribute.service'
// Export module for registering router in express app
export const router: Router = Router()

// getActorSome
router.get(ACTOR_ATTR_ENDPOINT + '/', async (req, res) => {
  res.status(200).send({
    actors: await getActorAttrSome()
  })
})

// getActorOne
router.get(ACTOR_ATTR_ENDPOINT + '/:actorId', async (req, res) => {
  //const routes = getRoutes();
  res.status(200).send({
    actors: await getActorAttrOne(parseInt(req.params.actorId))
  })
})
