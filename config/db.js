const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {} )

        const connector = conn.connection.host

        console.log('Mongo Db Connected'+ JSON.stringify( connector));

    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

module.exports = connectDB