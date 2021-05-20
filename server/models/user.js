import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email :  {
        type : String,
        required : true
    }, 
    password : {
        type : String,
        required : true
    }, 
    confirmPassword : {
        type : String,
        required : true
    }, 

})

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password , this.password)
  }
  
  userSchema.pre('save', async function (next) {
    
    if (!this.isModified('password')) return next();
  
    this.password = await bcrypt.hash(this.password, 10);
  
    this.confirmPassword = undefined;
  });


  const User = mongoose.model('User', userSchema)

  export default User