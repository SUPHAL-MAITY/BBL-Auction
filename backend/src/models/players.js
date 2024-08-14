import mongoose,{Schema} from "mongoose";




const playerSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
      },
      nickName: {
        type: String,
        
      },
      cityName: {
        type: String,
        
      },
      district: {
        type: String,
       
      },
      U20:{
        type: String,

      },
     A40:{
        type: String,

      },
      role: {
        type: String,
      },
      batting: {
        type: String,
      },
      bowling: {
        type: String,
      },
      whatsAppNo: {
        type: Number,
        
      },
      basePrice: {
        type: Number,
      },
      soldPrice: {
        type: Number,
      },
      team: {
        type: String,

      },

},{timestamps:true})



export const Players= mongoose.model("Players" , playerSchema)