const express=require('express') //add express
const mongoose =require('mongoose')
const {PORT,CONNECTION_STRING} =require('./config')
const fileRouter = require('./modules/files/fileRouter')

 
const app=express() //calling express constructor

app.use('/uploads/',express.static(__dirname+'/uploads'))
app.use('/files/',fileRouter)


mongoose.connect(CONNECTION_STRING, {useNewUrlParser:true, useUnifiedTopology:true})
.then(connected => {
    app.listen(PORT, ()=>console.log('Working on ${PORT}'));
    })
     
 