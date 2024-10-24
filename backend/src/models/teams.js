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
    }
    
    
  
   
},{timestamps:true})






export const Teams=mongoose.model("Teams",teamSchema)