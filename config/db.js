const mongoose = require('mongoose');
 

const dbConnection = async () => {
   const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    });

    console.log(`MongoDB connected to ${connection.connection.host}`.bold.magenta)

}

module.exports = dbConnection