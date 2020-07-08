const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programareSchema = new Schema({
    afectiune    : String,
    telefon      : String,
    data         : String,
    ora          : String,
    user         : String,
    userName     : String,
},
{
    timestamps:true,
});

const Programare = mongoose.model('Programare', programareSchema);

module.exports = Programare ;


