import express, { Express } from 'express'
import config from '../config.json'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from '../swagger.json'
import { getFilesWithKeyword } from './utils/getFilesWithKeyword'

const app: Express = express()

/************************************************************************************
 *                              Basic Express Middlewares
 ***********************************************************************************/

app.set('json spaces', 4)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle logs in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Handle security and origin in production
if (process.env.NODE_ENV === 'production') {
  app.use(helmet())
}
app.use(cors())
/************************************************************************************
 *                               Register all routes
 ***********************************************************************************/

getFilesWithKeyword('router', __dirname + '/app').forEach((file: string) => {
  const { router } = require(file)
  app.use('/', router)
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
/************************************************************************************
 *                               Express Error Handling
 ***********************************************************************************/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    return res.status(500).json({
      errorName: err.name,
      message: err.message,
      stack: err.stack || 'no stack defined'
    })
  }
)

export default app
