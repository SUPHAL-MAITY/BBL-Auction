import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Players} from "../models/players.js"; 
import { Teams } from "../models/teams.js";





// const getAllTeams=asyncHandler(async(req,res)=>{

//     const teams= await Teams.find({})
//     if(!teams){
//         throw new ApiError(400,"No teams  found while finding by team name")
//     }

    

//     return res.status(200).json(new ApiResponse(200,{teams,totalCount:teams.length},"All teams obtained successfully")

// )


// })


const getAllTeamDetails=asyncHandler(async(req,res)=>{

     
     const teams=await Teams.aggregate([
    {
        $lookup:{
            from: "players",
            localField: "name",
            foreignField: "team",
            as: "playerDetails"
          }
     },

     {
        $addFields:{
            "spentMoney": {
              $sum :{
               $map:{
                  input: "$playerDetails",
                  as: "money",
                  in: "$$money.soldPrice"
               } 
              }
            },

            totalPlayers:{$size:"$playerDetails"}
          }

     }
    ])


    return res.status(200).json(new ApiResponse(200,{teams,totalCount:teams.length},"All teams obtained successfully"))


})










export {getAllTeamDetails}