import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Players} from "../models/players.js"; 
import { Teams } from "../models/teams.js";
import  slugify  from 'slugify'

const editPlayer=asyncHandler(async(req,res)=>{

   

     const {price,team}=req.body;
    
     if(!price || !team ){
        throw new ApiError(400,"price or team   is not available")
     }

    
   
    const {id}= req.params;

    
    const slug=slugify(team) 

    const updatedPlayer=await Players.findOneAndUpdate({sl:id},{soldPrice:price,team,team_slug:slug},{new:true})

    if(!updatedPlayer){
        throw new ApiError(400,"player has not been updated")

    }

    

return res.status(200).json(new ApiResponse(200,{updatedPlayer},"player   updated  successfully"))

})


const getSinglePlayer=asyncHandler(async(req,res)=>{
    const {id}=req.params;

    const player=await Players.findOne({sl:id})

    if(!player){
        throw new ApiError(400,"No Players found while finding one player in admincontroller")
    }

    return res.status(200).json(new ApiResponse(200,player,"single player  obtained successfully")

    )


})



const createPlayer=asyncHandler(async(req,res)=>{

   
    const sl=await Players.countDocuments()

    const { name, nickName, dob,role,url, batting, bowling,jersey,pincode, whatsapp}=req.body

    if(  !name || !nickName|| !dob  || !pincode  ||  !role ||  !batting ||  !bowling ||  !whatsapp ||  !jersey){
        throw new ApiError(400,"please provide  all details of player")
    }

    const newPlayer=new Players({
        sl:sl+1,name, nickName, dob,role,url, batting, bowling,jersey,pincode, whatsapp
    })
    
    await newPlayer.save()
    

    res.status(200).json(new ApiResponse(200,newPlayer,"New  player created successfully"))






})





const deleteController=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    await Players.findByIdAndDelete({_id:id})

    return res.status(200).json(new ApiResponse(200,{},"players  deleted  successfully"))
    
})



const getAllSl=asyncHandler(async(req,res)=>{
    let slArray=[]
    const unSoldPlayers=await Players.find({team:"no_bid"})

    if(!unSoldPlayers){
        throw new ApiError(400,"unsold  Players  not found  while finding sl ")
    }

    unSoldPlayers.forEach((c)=>{
        slArray.push(c.sl)


    })


    console.log(slArray)

return res.status(200).json({status:200,slArray,message:"array has been successfully"})


})


const playerCount=asyncHandler(async(req,res)=>{
    const count=await Players.countDocuments({})

    if(!count){
        throw new ApiError(400,"Number  of players has not been generated ")
    }

    return res.status(200).json({status:200,count,message:"count  has been obtained successfully"})

})



const resetController=asyncHandler(async(req,res)=>{
   const updatedPlayers= await Players.updateMany({team:"unsold"},{$set:{team:"no_bid",team_slug:"no_bid"}})

   if(!updatedPlayers){
    throw new ApiError(400,"updated players have not been obtained")
   }

   return res.status(200).json({status:200 ,message:"players have been updated successfully"})



})



export {editPlayer,getSinglePlayer,deleteController,createPlayer,getAllSl,playerCount,resetController}


