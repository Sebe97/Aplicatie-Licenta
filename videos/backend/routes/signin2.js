const router = require('express').Router();
let User = require('../models/user.model');
let UserSession = require('../models/userSession.model');


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
 




router.route('/signup').post((req, res) => { // cont nou
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
                    firstName : req.body.nume, 
                    lastName : req.body.prenume,  
                    email : req.body.user,  
                    password : req.body.parola  
                    // isDeleted : req.body.isDeleted,  
                })
                
                newUser.save() // salvam userul
                .then(users => res.json({
                    success:true,
                    mesasge:"Userul deja exista",
                }))
                .catch(err => res.status(400).json('Error: ' + err));
            }
        })
});




// LOGARE
router.route('/signin').post((req, res) => { // aduce toti userii
    User.find({email: req.body.user})
        .then(users =>{
        
            if( users.length > 0 ){
                if(users[0].password == req.body.parola ){  // daca parola a fost introdusa corect
                 
                    const userSession = new UserSession({
                        userId : users[0]._id
                    });
                    userSession.save()

                    return res.send({
                        success: true,
                        message: "Logare Reusita",
                        id:users[0]._id
                    });
                }
                else{
                    return res.send({
                        success: false,
                        message: "Parola Gresita"
                    });
                }
            }
            else{
                return res.send({
                    success: false,
                    message: "Parola Gresita"
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




router.route('/verify').get((req, res) => { //verificare token 
    UserSession.find({ // aducem tokenul din baza de date
        _id:req.query.token,
        // isDeleted: false,
       
    }, (err, session) =>{ 

        if(err){ 
            return res.send({
                success: false,
                message: 'Eroare de server'
            })
        }
        if(session.length != 1){
            return res.send({
                success: false,
                message: 'Prea multe sesiuni'
            })
        }
        else{
            return res.send({
                success: true,
                message: 'Good'
            })
        }
    })
});





router.route('/logout').get((req, res)=>{
    UserSession.findOneAndUpdate( 
        { _id: req.query.token },
        { $set: { isDeleted: true } },
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