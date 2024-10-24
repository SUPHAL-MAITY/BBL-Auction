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

   


    const { sl,name, nickName, dob,address,pinCode, U20, A40, role, batting, bowling, whatsAppNo, basePrice}=req.body

    if( !sl || !name || !nickName|| !dob || !address || !pinCode  ||  !role ||  !batting ||  !bowling ||  !whatsAppNo ||  !basePrice){
        throw new ApiError(400,"please provide  all details of player")
    }

    const newPlayer=new Players({
        sl,name, nickName, dob,address,pinCode, U20, A40, role, batting, bowling, whatsAppNo, basePrice
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
    const unSoldPlayers=await Players.find({team:"unsold"})

    if(!unSoldPlayers){
        throw new ApiError(400,"unsold  Players  not found  while finding sl ")
    }

    unSoldPlayers.forEach((c)=>{
        slArray.push(c.sl)


    })


    console.log(slArray)

return res.status(200).json({status:200,slArray,message:"array has been successfully"})


})


export {editPlayer,getSinglePlayer,deleteController,createPlayer,getAllSl}


