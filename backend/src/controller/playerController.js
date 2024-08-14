import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Players} from "../models/players.js"; 



const getAllPlayers=asyncHandler(async(req,res)=>{

    const players=await Players.find({})
    

    if(!players){
        throw new ApiError(400,"No Players Availible")
    }

    return res.status(200).json(new ApiResponse(200,{players,totalCount:players.length},"All players obtained successfully"))

})


export {getAllPlayers}