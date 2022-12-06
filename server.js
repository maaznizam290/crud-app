const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
// const ejs = require('ejs')
const app = express();
const bodyParser = require('body-parser');
dotenv.config({path:'config.env'})
const PORT = process.env.port ||3000;

// log requests
app.use(morgan('tiny'));

// parse request to body parser
app.use(bodyParser.urlencoded({extended:true}))

// set view engine
app.set('view engine','ejs')
// app.set('views',path.resolve(__dirname,"views/ejs"))

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

// css/style.css
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});
