const router = require('express').Router();
let User = require('../models/user.model');
let UserSession = require('../models/userSession.model');


router.route('/').get((req, res) => { // aduce toti userii
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
 

router.route('/getUserByToken').post((req, res) => {
    console.log(req.body.token )// aduce toti userii
    User.find({_id:req.body.token})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
 




router.route('/signup').post((req, res) => { // cont nou
    const newUser = new User({
        firstName : req.body.nume, 
        lastName : req.body.prenume,  
        email : req.body.user,  
        password : req.body.parola  
        // isDeleted : req.body.isDeleted,  
    })
  
    newUser.save() // salvam userul
        .then(users => res.json('User Adaugat'))
        .catch(err => res.status(400).json('Error: ' + err));
});




// LOGARE
router.route('/signin').post((req, res) => { // aduce toti userii
    User.find({email: req.body.user})
        .then(users =>{
        
            if( users.length > 0 ){
                if(users[0].password == req.body.parola ){  // daca parola a fost introdusa corect
                    console.log("users[0]");
                    console.log(users[0]);
                            
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


// router.route('/signin').post((req, res) => { // intrare in cont
//     const newUser = new User({
//         email : req.body.email.toLowerCase(),  
//         password : req.body.password
//     })
    
//     // verificam daca userul si parola sunt bune:
//     // aducem userul din baza de date si ii verificam parola
    
//     User.find({
//         email: req.body.email
//     }, (err, users) => {
//         if(err){
//             return res.send({
//                 success: false,
//                 message: "Eroare de server"
//             });
//         }
//         // if(users.length !=1) {
//         //     return res.send({
//         //         success: false,
//         //         message: "Eroare: invalid"
//         //     });
//         // }

//         console.log("users@@@" , users);
        
//         const user = users[0]; // luam primul user 
//         if(!user.validPassword(req.body.password)){ // parola gresita
//             return res.send({
//                 success: false,
//                 message: "Eroare: parola gresita"
//             });
//         }

//         // Daca parola este buna cream userSession
//         const userSession = new UserSession();
//         userSession.userId = user._id;
//         userSession.save((err,doc)=>{
//             if(err){ // daca avem eroare
//                 return res.send({
//                     success: false,
//                     message: "Eroare la server"
//                 });
//             }
//             // in cazul in care totul este bine
//             return res.send({
//                 success : true,
//                 message : 'Valid sign in',
//                 token   : doc._id
//             })
//         })

//     })

// });




router.route('/verify').get((req, res) => { //verificare token 
    UserSession.find({ // aducem tokenul din baza de date
        _id:req.query.token,
        // isDeleted: false,
       
    }, (err, session) =>{ 
     
        console.log("lungime== " + req.query.token);
        console.log("session= ",session );
        
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