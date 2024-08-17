import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Players} from "../models/players.js"; 
import { Teams } from "../models/teams.js";

const editPlayer=asyncHandler(async(req,res)=>{

     const {price,team,slug}=req.body;
      console.log(price)
      console.log(team)
      console.log(slug)
     if(!price || !team || !slug ){
        throw new ApiError(400,"price ,team  or slug  is not available")
     }

    const {id}= req.params;
    

    const player=await Players.findByIdAndUpdate(id, {soldPrice:price, team:team,slug},{new:true})

    if(!player){
        throw new ApiError(400,"player has not been updated")

    }

    const numberUpdate =await Teams.findOneAndUpdate({name:team}, 
        { $inc: { playersNumber: 1, spentAmount:price, U20:player.U20=="Yes"?1:0 , A40 :player.A40=="Yes"? 1:0 }},
        {new:true})
    
    if(!numberUpdate){
        throw new ApiError(400,"Number has not been updated")
    }
    

    return res.status(200).json(new ApiResponse(200,{},"players  and team updated  successfully"))

})


export {editPlayer}


