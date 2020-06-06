const router = require('express').Router();
let User = require('../models/user.model');
let UserSession = require('../models/userSession.model');



router.route('/').get((req, res) => { // aduce toti userii
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
 





router.route('/signup').post((req, res) => { // cont nou
    const newUser = new User({
        firstName : req.body.firstName, 
        lastName : req.body.lastName,  
        email : req.body.email.toLowerCase(),  
        password : req.body.password
        // isDeleted : req.body.isDeleted,  
    })
    newUser.save() // salvam userul
        .then(users => res.json('User Adaugat'))
        .catch(err => res.status(400).json('Error: ' + err));
});





// LOGARE
router.route('/signin').post((req, res) => { // intrare in cont
    const newUser = new User({
        email : req.body.email.toLowerCase(),  
        password : req.body.password
    })
    
    // verificam daca userul si parola sunt bune:
    // aducem userul din baza de date si ii verificam parola
    
    User.find({
        email: req.body.email
    }, (err, users) => {
        if(err){
            return res.send({
                success: false,
                message: "Eroare de server"
            });
        }
        // if(users.length !=1) {
        //     return res.send({
        //         success: false,
        //         message: "Eroare: invalid"
        //     });
        // }

        const user = users[0]; // luam primul user 
        if(!user.validPassword(req.body.password)){ // parola gresita
            return res.send({
                success: false,
                message: "Eroare: parola gresita"
            });
        }

        // Daca parola este buna cream userSession
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err,doc)=>{
            if(err){ // daca avem eroare
                return res.send({
                    success: false,
                    message: "Eroare la server"
                });
            }
            // in cazul in care totul este bine
            return res.send({
                success :true,
                message : 'Valid sign in',
                token   : doc._id
            })
        })

    })

});



router.route('/verify').post((req, res) => { //verificare token 
    UserSession.find({ // aducem tokenul din baza de date
        _id:req.body.token,
       
    }, (err, session) =>{
      return res.send(session)
        
        // if(err){
        //     return res.send({
        //         success: false,
        //         message: 'Eroare de server'
        //     })
        // }
        // if(session.length != 1){
        //     return res.send({
        //         success: false,
        //         message: 'Prea multe sesiuni'
        //     })
        // }
        // else{
        //     return res.send({
        //         success: true,
        //         message: 'Good'
        //     })
        // }
    })
});



module.exports = router;
