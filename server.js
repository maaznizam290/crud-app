const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./server/database/connection');
const ejs = require('ejs')
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { Router } = require('express');

dotenv.config({path:'../crudapp/config.env'})
const PORT = 3000 ;
app.use(cors())
// log requests
app.use(morgan('tiny'));

// mongoDB connection
connectDB();
// parse request to body parser
app.use(bodyParser.urlencoded({extended:true}))

// set view engine
app.set('view engine','ejs')
// app.set('views',path.resolve(__dirname,"views/ejs"))

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.join(__dirname,"assets/js")))

// load routers
app.use('/',require('./server/routes/router.js'))
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    // console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
});
