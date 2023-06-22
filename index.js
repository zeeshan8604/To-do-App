const express=require('express');
const db=require('./config/mongoose');
const TodoLists = require('./models/todolist')
const app=express();
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout)
const path=require('path');
const port=8000;
//  app.set('view engine',ejs);
//  app.set('views', './views');
app.use(express.urlencoded()) 
app.use('/',require('./routes'))
app.use(express.static('./assets')) // for getting static
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
app.set('view engine','ejs');
app.set('views','./views');

// app.get('/', async function(req, res){
//     res.render('home');
// });

app.listen(port, function(err){
    if(err){
        console.log("error has been found", err);
    }
    console.log('OK server is running!');
});
