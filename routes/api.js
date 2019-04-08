const route= require('express').Router();
//this route is on the "/api/" path

const db= require('../db');

route.get('/reminders/',(req,res)=>{
    //send all reminders as array here

    db.getAllReminders()
    .then((reminders)=>
        res.send(reminders)
    )
    .catch((err)=> res.send({error: err}))
})

route.post('/reminders/',(req,res)=>{
    //add new reminders details are in body

    db.addReminder(req.body.reminder,req.body.name)
    .then(function(reminders){
        res.send(reminders)
        res.redirect('/api/')}
        
    )
    .catch((err)=> res.send({error: err}))
})



exports= module.exports={route}