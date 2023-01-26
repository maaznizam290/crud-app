const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
    const con = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        //  useCreateIndex:true, 
        //  useFindAndModify:false
    })
    const db = mongoose.connection;
    console.log(`MongoDB connected at cluster:${con.connection.host}`)
    }catch(err){ 
    console.log(err);
    process.exit(1);
    }
}
module.exports = connectDB;
