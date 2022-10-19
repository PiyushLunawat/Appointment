import express from 'express';
import mongoose from 'mongoose';
import parser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import User from './models/Userinfo.js';
import appoint from './models/Appointment.js'
import cookie from 'cookie-parser';
import path from 'path'
var salt = bcrypt.genSaltSync();


const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }))
app.use(cookie());

mongoose.connect('mongodb+srv://piyush:piyush@cluster0.ts0ct9r.mongodb.net/user?retryWrites=true&w=majority',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('connected to database!');

});

app.post('/signup',(req,res)=>{
    let email = req.body.email;
    let pass = req.body.pass;
    let confirmpass = req.body.confirmpass;

    if(pass === confirmpass)
    {
       
                    const user  = new User({
                        email:email,
                        password:pass
                    });

                    user.save();
                    res.send('posted!')
                    console.log('posted');
             
        
    }
    else
    res.send('err');
})

app.post('/login',(req,res)=>{

    let email = req.body.email;
    let pass  = req.body.pass;

    

    User.findOne({email:email},(err,doc)=>{
        if(err)
        res.send('false');
        else
        {
           
            
            if(pass === doc.password)
            {
                
                res.cookie('email',email);
                res.send('true');
            }
            else
            res.send('false');

        }
    })
})

app.post('/appoint',(req,res)=>{

    var newappoint = new appoint({
        date:req.body.dat,
        time:req.body.tim,
        email:req.body.name,
        age:req.body.age
    });
    

    newappoint.save();
})
app.get('/:id',(req,res)=>{
    
    
    appoint.find({email:req.params.id},(err,arr)=>{
        
        if(!err)
        res.send(arr);

    })
})




if(process.env.NODE_ENV == 'production')
{
    app.use(express.static('../Client/build'));
}
app.listen(process.env.PORT|| 5000,()=>{console.log('listening on port 5000')});