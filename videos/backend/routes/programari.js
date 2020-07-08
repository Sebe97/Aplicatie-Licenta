const router = require('express').Router();
let Programare = require('../models/programare.model');
let Users = require('../models/user.model');


router.route('/').get((req, res) => {
    Programare.find()
    .then(programari => res.json(programari))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/getSorted').get((req, res) => {
    Programare.find().sort({data:1,ora:1})
    .then(programari =>{
        
        return res.json(programari)
    })
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/deleteOne').post((req, res) => {
       
       Programare.deleteOne( { "_id" : req.body.id }, function(err){
           if(err)  res.json(err)
           else res.json("Programarea a fost stearsa")
       })
});


router.route('/getSortedStartingToday').get((req, res) => {
    var astazi = new Date();
    var day = astazi.getDate();
    var month = astazi.getMonth();
    var year = astazi.getFullYear();
    day = day < 10 ? '0'+ day : day;
    month = Number(month +1);
    month = month < 10 ? '0'+ month : month
    let astaziFormatat = month + '-' + day + '-' + year
    
    
    Programare.find({ "data": { "$gte": astaziFormatat } }).sort({data:1})
    .then(programari => {
        
        res.json(programari)
    })
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/getToday').get((req, res) => {
    var astazi = new Date();
    var day = astazi.getDate();
    var month = astazi.getMonth();
    var year = astazi.getFullYear();
    day = day < 10 ? '0'+ day : day;
    month = Number(month +1);
    month = month < 10 ? '0'+ month : month
    let astaziFormatat = month + '-' + day + '-' + year
    
    Programare.find({ "data": { "$eq": astaziFormatat } }).sort({data:1})
    .then(programari => {
        
        res.json(programari)
    })
    .catch(err => res.status(400).json('Error: ' +err));
});



router.route('/getSpecificDay').post((req, res) => {
    
    var astazi = new Date(req.body.astazi);
    var day = astazi.getDate();
    var month = astazi.getMonth();
    var year = astazi.getFullYear();
    day = day < 10 ? '0'+ day : day;
    month = Number(month +1);
    month = month < 10 ? '0'+ month : month
    let astaziFormatat = month + '-' + day + '-' + year
    
    
    Programare.find({ "data": { "$eq": astaziFormatat } }).sort({data:1})
    .then(programari => {
        
       return res.json(programari)
    })
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/getBySpecificUser').post((req, res) => {
    
    
    Programare.find({user:req.body.idUser})
    .then(programari => {
        
       return res.json(programari)
    })
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/add').post((req, res) => {
    
    const newProgramare = new Programare({
         afectiune  :req.body.afectiune,
         telefon    :req.body.telefon,
         data       :req.body.data,
         ora        :req.body.ora,
         user       :req.body.userId,
         userName   :req.body.userName,
        })
    newProgramare.save()
    .then(programari => res.json('Programare Adaugata'))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/data').post((req, res) => {
    const {data} = req.body // ia variabila "data" din body
    
    Programare.find({data:data})
    .then(programare => res.json(programare))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/:id').get((req, res) => {
    Programare.findById(req.params.id)
    .then(programare => res.json(programare))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/:id').delete((req, res) => {
    Programare.findByIdAndDelete(req.params.id)
    .then(programari => res.json('Programare Stearsa'))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/update/:id').post((req, res) => {
   
    Programare.findById(req.params.id)
    .then(programare => {
         programare.nume    = req.body.nume,
         programare.telefon = req.body.telefon,
         programare.data    = req.body.data,
         programare.ora     = req.body.ora,
   
    programare.save()

    .then( () => res.json('Programare Update'))
    .catch(err => res.status(400).json('Error: ' +err));
})
.catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;
