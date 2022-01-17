import mongoose from 'mongoose'

async function MongoConnection() {
  await mongoose.connect(process.env.MONGO_URL)
}

MongoConnection()

// MALB dica de serviço de Mongo
// DocumentDB AWS
