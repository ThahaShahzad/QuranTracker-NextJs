import mongoose from 'mongoose'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { mongoDbUri } from './envVariables'

const connectDB = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    console.log('Already Connected')
    return handler(req, res)
  }
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useUnifiedTopology', true)
  // Use new db connection
  await mongoose.connect(mongoDbUri)
  console.log('New Db Connection')
  return handler(req, res)
}

export default connectDB
