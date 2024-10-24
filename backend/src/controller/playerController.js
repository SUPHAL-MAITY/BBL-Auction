import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Players} from "../models/players.js"; 
import { Teams } from "../models/teams.js";



const getAllPlayers=asyncHandler(async(req,res)=>{

    const players=await Players.find({})
    

    if(!players){
        throw new ApiError(400,"No Players Availible")
    }

    return res.status(200).json(new ApiResponse(200,{players,totalCount:players.length},"All players obtained successfully"))

})


const getImagesByTeam=asyncHandler(async(req,res)=>{
    const {teamName}=req.params;
    // console.log("getimage")

    const url=await Teams.findOne({slug:teamName})

    if(!url){
        throw new ApiError(400,"url is not found")
    }

    return res.status(200).json(new ApiResponse(200,url,"url obtained successfully")

    )

    
})

const getPlayersByTeam=asyncHandler(async(req,res)=>{
    const {teamName}=req.params;

    const players=await Players.find({team_slug:teamName})

    if(!players){
        throw new ApiError(400,"No Players found while finding by team name")
    }

    return res.status(200).json(new ApiResponse(200,{players,totalCount:players.length},"All players obtained successfully")

    )


})






export {getAllPlayers,getPlayersByTeam,getImagesByTeam}