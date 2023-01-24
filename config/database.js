const mongoose = require("mongoose");

// strict query option will be false by default in Mongoose 7
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
  
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
  
  module.exports = connectDB