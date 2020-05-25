const router = require('express').Router();
let User = require('../models/user.model');

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

router.route('/signin').post((req, res) => { // intrare in cont
    const newUser = new User({
        firstName : req.body.firstName, 
        lastName : req.body.lastName,  
        email : req.body.email.toLowerCase(),  
        password : req.body.password
    })
    newUser.save()
        .then(users => res.json('User Adaugat'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/data').post((req, res) => {
//     const { data } = req.body // ia variabila "data" din body
//     console.log("data aici== ", data);

//     Programare.find({ data: data })
//         .then(programare => res.json(programare))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//     Programare.findById(req.params.id)
//         .then(programare => res.json(programare))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//     Programare.findByIdAndDelete(req.params.id)
//         .then(programari => res.json('Programare Stearsa'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {

//     Programare.findById(req.params.id)
//         .then(programare => {
//             programare.nume = req.body.nume,
//                 programare.telefon = req.body.telefon,
//                 programare.data = req.body.data,
//                 programare.ora = req.body.ora,

//                 programare.save()

//                     .then(() => res.json('Programare Update'))
//                     .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;
