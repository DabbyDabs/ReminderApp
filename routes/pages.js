const route= require('express').Router()
const db= require('../db');
route.get('/',(req, res )=>{           
    db.getAllReminders().then((reminder)=>{    
        res.render('/',{reminder})
    }).catch((err)=>{
        res.send(err);
})
})

route.post('/',(req,res)=>{
    db.addReminder(req.body.reminder , req.body.name)
    .then(()=>{
        res.redirect('/pages')
    }).catch((err)=>{
        res.send(err)
    })
        
})
exports= module.exports={
    route
}