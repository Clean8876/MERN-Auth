import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    
},{
        timestamps:true
    },);

userschema.pre('save',async function(next){
    if(!this.isModified){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})
const User = mongoose.model('User', userschema);
export default  User;