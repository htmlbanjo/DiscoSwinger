import { Router } from 'express'
import { ACTOR_ENDPOINT } from '@constants/endpoint'
import { getActorSome, getActorOne } from './actor.service'
// Export module for registering router in express app
export const router: Router = Router()

// getActorSome
router.get(ACTOR_ENDPOINT + '/', async (req, res) => {
  res.status(200).send({
    actors: await getActorSome()
  })
})

// getActorOne
router.get(ACTOR_ENDPOINT + '/:actorId', async (req, res) => {
  //const routes = getRoutes();
  res.status(200).send({
    actors: await getActorOne(parseInt(req.params.actorId))
  })
})
