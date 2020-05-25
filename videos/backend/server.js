const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = new express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("Baza de date este conectata");
})

const accountRouter =  require('./routes/signin2')
app.use('/account', accountRouter);

const programariRouter =  require('./routes/programari')
app.use('/programari', programariRouter);

app.listen(port,() => {
    console.log('Serverul a pornit'); 
});