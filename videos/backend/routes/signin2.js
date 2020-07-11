const router = require('express').Router();
let User = require('../models/user.model');
let UserSession = require('../models/userSession.model');
const nodemailer = require('nodemailer');
require('dotenv').config();





router.route('/').get((req, res) => { // aduce toti userii
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
 

router.route('/getUserByToken').post((req, res) => {
    User.find({_id:req.body.token})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
 

router.route('/checkIfUserExistsAndSendMail').post((req, res) => { // cont nou
    
    User.find({email: req.body.user}).then(users =>{
        
        if((users.length==1)) {
            console.log("Exista userul "+req.body.user);
            //trimitem mail resetarea parola
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            });
            
            var mailOptions = {
                from: 'sebefacultate@gmail.com',
                to: req.body.user,
                subject: 'Apasati pe link pentru resetare parola',
                text: "http://localhost:3000/ResetareParola?"+users[0]._id,
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            
            return res.json({
                success:true,
                message:"Un link de resetare parola a fost trimis la adresa de email: "+req.body.user,
            })
            // END trimitem mail resetarea parola

        }
        else  {
            return res.json({
            success: false,
            message:"Adresa de email nu exista"
            })
        }
    })
})

router.route('/signup').post((req, res) => { // cont nou

    let esteAdmin = false;
    User.countDocuments().then(nr =>{
        console.log("numarul de useri");
        console.log(nr);
        if((nr==0)) {
            esteAdmin = true;
        }

        User.find({email: req.body.user})
        .then(users =>{
            if(users[0] || users.length==1   ){
                
                return res.json({
                    success:false,
                    mesasge:"Userul deja exista"
                })
            }
            else{
                
                const newUser = new User({
                    firstName   : req.body.nume     , 
                    lastName    : req.body.prenume  ,  
                    email       : req.body.user     ,  
                    password    : req.body.parola   ,
                    admin       : esteAdmin         ,  
                    verificat   : false             ,  
                    // isDeleted : req.body.isDeleted,  
                })
                
                newUser.save() // salvam userul
                .then(users => {
                   
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD
                        }
                    });
                    
                    var mailOptions = {
                        from: 'sebefacultate@gmail.com',
                        to: req.body.user,
                        subject: 'Apasati pe link pentru confirmare',
                        text: "http://localhost:3000/Login?"+users._id,
                    };
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                        console.log(error);
                        } else {
                        console.log('Email sent: ' + info.response);
                        }
                    });
                    
                    res.json({
                        success:true,
                        mesasge:"Userul deja exista",
                    })
                })
                .catch(err => res.status(400).json('Error: ' + err));
            }
        })
    })
   
});




// LOGARE
router.route('/signin').post((req, res) => { // aduce toti userii

    User.find({email: req.body.user})
        .then(users =>{
            if( users.length > 0 ){
                    if(users[0].verificat == "false"){
                        return res.send({
                            success: false,
                            message: "Adresa de email nu este verificata"
                        });
                    if(users[0].password == req.body.parola ){  // daca parola a fost introdusa corect si emailul a fost verificat
                        
                    
                        const userSession = new UserSession({
                            userId : users[0]._id
                        });
                        userSession.save()

                        return res.send({
                            success     : true              ,
                            message     : "Logare Reusita"  ,
                            id          : users[0]._id      ,
                            admin       : users[0].admin    ,
                        });
                    }
                    else{
                        return res.send({
                            success: false,
                            message: "Parola Gresita"
                        });
                    }
                }
            }
                    else{
                        return res.send({
                            success: false,
                            message: "Adresa de email nu este inregistrata"
                        });
                    }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/deleteUser').post((req, res) => {

       
    User.deleteOne( { "email" : req.body.email }, function(err){
        
        if(err)  res.json(err)
        else res.json("Programarea a fost stearsa")
    })
});




router.route('/verify').post((req, res) => { //verificare token 
    console.log("req.query.token == ");
    console.log(req.body.token); // aici imi vine tokenul de user
    // urmeaza sa setez acestui user in baza de date "verified = true"

    User.findOneAndUpdate( 
        { _id: req.body.token },
        { $set: { verificat: "true" } },
        null, (err, sessions) => {
            if(err) {
                    return res.send({
                    success: false,
                    message: 'Eroare de server'
                })
            }

        return res.send({
            success: true,
            message: 'Good'
        })

        }
    )
});



router.route('/resetareParola').post((req, res) => { //verificare token 
    console.log("Resetare Parola");
    console.log(req.body.token); // aici imi vine tokenul de user
    console.log("req.body.parola"); // aici imi vine tokenul de user
    console.log(req.body.parola); // aici imi vine tokenul de user
    // urmeaza sa setez acestui user in baza de date "verified = true"

    User.findOneAndUpdate( 
        { _id: req.body.token },
        { $set: { password: req.body.parola } },
        null, (err, sessions) => {
            if(err) {
                    return res.send({
                    success: false,
                    message: 'Eroare de server'
                })
            }

        return res.send({
            success: true,
            message: 'Parola a fost schimbata cu success'
        })

        }
    )
});





router.route('/logout').get((req, res)=>{
    UserSession.findOneAndUpdate( 
        { _id: req.body.token },
        { $set: { verificat: true } },
        null, (err, sessions) => {
            if(err) {
                    return res.send({
                    success: false,
                    message: 'Eroare de server'
                })
            }

        return res.send({
            success: true,
            message: 'Good'
        })

        }
    )
})



module.exports = router;


// Workflow

// 1. Cand se incarca pagina ( pe componentDidMount), verificam daca utilizatorul are un token (seesionId) in localStorage
//     - Daca nu au => nu e logat => logIn Screen
//     - Daca au => verificam tokenul  