import mongoose from "mongoose"
import config from "config"
import logger from "./logger"
export default async () => {
  const dbUri = config.get<string>("dbUri")
  return mongoose
    .connect(dbUri)
    .then(() => logger.info("Connected to DB!"))
    .catch((err) => {
      logger.error(`Connection Db error: ${err}`)
      process.exit(1)
    })
}
