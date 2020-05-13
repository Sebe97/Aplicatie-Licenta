const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programareSchema = new Schema({
    nume :String,
    telefon :String,
    data: String,
    ora: String,
},
{
    timestamps:true,
});

const Programare = mongoose.model('Programare', programareSchema);

module.exports = Programare ;


