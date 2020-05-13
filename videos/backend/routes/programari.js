const router = require('express').Router();
let Programare = require('../models/programare.model');

router.route('/').get((req, res) => {
    Programare.find()
    .then(programari => res.json(programari))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req, res) => {
    const newProgramare = new Programare({
         nume    :req.body.nume,
         telefon :req.body.telefon,
         data    :req.body.data,
         ora     :req.body.ora,
        })
    newProgramare.save()
    .then(programari => res.json('Programare Adaugata'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/data').post((req, res) => {
    const {data} = req.body // ia variabila "data" din body
    console.log("data aici== " , data); 
    
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
