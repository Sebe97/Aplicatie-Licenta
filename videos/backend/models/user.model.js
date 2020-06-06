const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
   firstName: {
       type: String,
       default: ''
   }, 
   lastName: {
       type: String,
       default: ''
   }, 
   email: {
       type: String,
       default: ''
   }, 
   password: {
       type: String,
       default: ''
   }, 
   isDeleted: {
       type: Boolean,
       default: false
   }, 
});

UserSchema.method.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}


UserSchema.methods.validPassword = function(password){
    console.log(password);
    console.log(this.password);
    
    return password==this.password? true : false
};

module.exports = mongoose.model('User',UserSchema);