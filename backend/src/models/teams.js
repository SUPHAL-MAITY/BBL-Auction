import mongoose,{Schema} from "mongoose";





const teamSchema=new Schema({
    name:{
        type:String,
        
    },
    image:{
        type:String,
    },
    slug:{
        type:String,
    },
    spentAmount:{
        type:Number,
    },
    
    U20:{
        type:Number,
    },
    A40:{
        type:Number,

    },
    playersNumber:{
        type:Number,
    }

    
  
   
},{timestamps:true})






export const Teams=mongoose.model("Teams",teamSchema)