
// const User = require('../models/user.model')
// module.exports = (app) => {

//     app.post('/api/account/signup', (req, res, next)=>{
//         console.log("intra a");
        
//         const { body } = req;
//         const {
//             fisrtName,
//             lastName,
//             email,
//             password,
//         } = body;
//         if(!fisrtName){
//             return res.send({
//                 success: false,
//                 message: 'Eroare, prenumele nu poate fi gol'
//             });
//         }
//         if(!lastName){
//             return res.send({
//                 success: false,
//                 message: 'Eroare, numele nu poate fi gol'
//             });
//         }
//         if(!email){
//             return res.send({
//                 success: false,
//                 message: 'Eroare, emailul nu poate fi gol'
//             });
//         }
//         if(!password){
//             return res.send({
//                 success: false,
//                 message: 'Eroare, parola nu poate fi goala'
//             });
//         }
//         email = email.toLowerCase();
//         // pasi
//         // 1. verificam daca exisa emailul
//         // 2. salvam
//         User.find({
//             email: email
//             },(err, previousUser) => {
//                 if(err){
//                     return res.send({
//                         success: false,
//                         message: 'Eroare de server'
//                     })
//                 }
//                 else if(previousUser.length > 0) {
//                     return res.send({
//                         success: false,
//                         message: 'Eroare, contul deja exista'
//                     }) 
//                  }
//             });
//             // salvam userul
//             const newUser = new User();
//             newUser.email = email;
//             newUser.firstName = firstName;
//             newUser.lastName = lastName;
//             newUser.password = newUser.generateHash(password);
            
//             newUser.save((err,user) => {
//                 if(err){
//                     res.end({
//                         success:false,
//                         message:'Eroare la server'
//                     })
//                 }
//                 res.end({
//                     success: true,
//                     message: 'Signed up'
//                 })
//             })
//     });
// }