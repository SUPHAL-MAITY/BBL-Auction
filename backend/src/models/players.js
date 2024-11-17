import mongoose,{Schema} from "mongoose";




const playerSchema = new Schema({
  sl: {
    type: Number,
    unique:[true,"sl should be unique"],

    
  },
    name: {
        type: String,
        required: [true, "name is required"],
      },
      nickName: {
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
      jersey:{
        type:String,

      },
      whatsapp: {
        type: Number,
        
      },
      basePrice: {
        type: Number,
        default:500,
      },
      soldPrice: {
        type: Number,
        default:0,
      },
      team: {
        type: String,
        default:"no_bid"

      },
      url:{
        type:String,
      },
      dob:{
        type:String,
      },
      pincode:{
        type:Number,
      },
      team_slug:{
        type:String,
      }
    

},{timestamps:true})






export const Players= mongoose.model("Players" , playerSchema)