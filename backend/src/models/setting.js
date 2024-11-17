import mongoose,{Schema} from "mongoose";



const settingSchema=new Schema({


    formState:{
        type:Boolean,
        default:true,
    }
},{timestamps:true})



export const Settings=mongoose.model("Settings",settingSchema)