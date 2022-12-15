const mongoose = require('mongoose');
// const MONGO_URI = "mongodb+srv://admin:admin@cluster0.p2psv59.mongodb.net/rrrrrr?retryWrites=true&w=majority";
const connectDB = async()=>{
    try{
    const con = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        // useCreateIndex:true, 
    })
    // const db = mongoose.connection;
    console.log(`MongoDB connected at cluster:${con.connection.host}`)
    }catch(err){ 
    console.log(err);
    process.exit(1);
    }
}
module.exports = connectDB;
