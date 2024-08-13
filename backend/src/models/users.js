import mongoose,{Schema} from "mongoose";





const userSchema=new Schema({
    userName:{
        type:String,
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,

    },
    password: {
        type: String,
        required: [true, "password is required"],
      },
  
   
},{timestamps:true})






export const User=mongoose.model("User",userSchema)