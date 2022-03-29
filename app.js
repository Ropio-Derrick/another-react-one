const express = require('express')
const dotenv = require('dotenv')
const morgan= require('morgan')
const Exphbs =  require('express-handlebars')
const connectDB = require('./config/db')
const path = require('path');

//Load config
dotenv.config({path: './config/config.env'})

connectDB()

const app = express();


const PORT= process.env.PORT || 5000
const NodeEnv= process.env.NODE_ENV

//Logging
if (NodeEnv === 'development'){
    app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', Exphbs.engine({defaultLayout:'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

//Routes
app.use(express.static(path.join(__dirname, "/public")));
app.use('/',require('./routes/index'))


app.listen(PORT, ()=>{
    console.log("Server running in " + JSON.stringify(NodeEnv) + "on port " + JSON.stringify(PORT) 
    );
})