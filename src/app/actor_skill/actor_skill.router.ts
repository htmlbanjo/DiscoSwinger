import { Router } from 'express'
import { ACTOR_SKILL_ENDPOINT } from '@constants/endpoint'
import { getActorSkillSome, getActorSkillOne } from './actor_skill.service'
// Export module for registering router in express app
export const router: Router = Router()

// getActorSome
router.get(ACTOR_SKILL_ENDPOINT + '/', async (req, res) => {
  res.status(200).send({
    actors: await getActorSkillSome()
  })
})

// getActorOne
router.get(ACTOR_SKILL_ENDPOINT + '/:actorId', async (req, res) => {
  //const routes = getRoutes();
  res.status(200).send({
    actors: await getActorSkillOne(parseInt(req.params.actorId))
  })
})
