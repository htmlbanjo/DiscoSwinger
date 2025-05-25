import { Router } from 'express'
import { LOCATION_ENDPOINT } from '@constants/endpoint'
import { getLocationSome, getLocationOne } from './location.service'
// Export module for registering router in express app
export const router: Router = Router()

// getLocationSome
router.get(LOCATION_ENDPOINT + '/', async (req, res) => {
  res.status(200).send({
    locations: await getLocationSome()
  })
})

// getLocationOne
router.get(LOCATION_ENDPOINT + '/:locationId', async (req, res) => {
  //const routes = getRoutes();
  res.status(200).send({
    locations: await getLocationOne(parseInt(req.params.locationId))
  })
})
