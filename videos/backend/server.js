const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); // din cauza unor updateuri "useFindAndModify" suprascrie "findOneAndUpdate", deci acest rand dezactiveaza "useFindAndModify"

const nodemailer = require('nodemailer');
require('dotenv').config();


const app = new express();
const port = process.env.PORT || 5000;

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD
//     }
//   });

//   var mailOptions = {
//     from: 'sebefacultate@gmail.com',
//     to: 'sebe97@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });


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