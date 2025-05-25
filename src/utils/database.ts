import { Sequelize } from 'sequelize'
import chalk from 'chalk'

export const connect = async (type: string) => {
  const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'src/data/storage.sqlite3',
    define: {
      freezeTableName: true
    }
  })

  return await db
    .authenticate()
    .then(result => {
      console.log(chalk.green('Connected to database'))
      return db
    })
    .catch(error => {
      console.log(
        chalk.redBright('Unable to connect to db: '),
        chalk.red(error)
      )
      process.exit(1)
    })
}
