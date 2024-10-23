import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Players} from "../models/players.js"; 
import { Teams } from "../models/teams.js";

const editPlayer=asyncHandler(async(req,res)=>{

     const {price,team,slug}=req.body;
    //   console.log(price)
    //   console.log(team)
    //   console.log(slug)
     if(!price || !team || !slug ){
        throw new ApiError(400,"price ,team  or slug  is not available")
     }

    

    const {id}= req.params;

    // const player =await Players.findById({_id:id})

    // const oldPrice= player.soldPrice;
    // const newPrice=price;

    // console.log(oldPrice)
    // console.log(newPrice)


    // const oldTeam= player.team ;
    // const newTeam=team

    // console.log(oldTeam)
    // console.log(newTeam)


    // const toBeIncreasedAmount= (newPrice-oldPrice);

    // console.log(toBeIncreasedAmount)

    
    
    
    // const updatedPlayer=await Players.findByIdAndUpdate(id, {soldPrice:price, team:team,slug},{new:true})
    
    const updatedPlayer=await Players.findByIdAndUpdate(id,{soldPrice:price,team,slug},{new:true})

    if(!updatedPlayer){
        throw new ApiError(400,"player has not been updated")

    }


    


    // if(oldTeam==newTeam){

    //     const numberUpdate =await Teams.findOneAndUpdate({name:team}, 
    //         { $inc: {  spentAmount:toBeIncreasedAmount }},
    //         {new:true})


    //         if(!numberUpdate){
    //             throw new ApiError(400,"Number has not been updated")
    //         }

        

    // }else{
    //     const newTeamNumberUpdate =await Teams.findOneAndUpdate({name:team}, 
    //         { $inc: { playersNumber:  1 , spentAmount: price , U20: (player.U20)=="Yes" ? 1:0 , A40 :(player.A40=="Yes" )  ? 1:0 }},
    //         {new:true})
    //     if(!newTeamNumberUpdate){
    //             throw new ApiError(400," new team Number has not been updated")
    //         }

    //     if(oldTeam !== "unsold"){

    //     const oldTeamNumberUpdate =await Teams.findOneAndUpdate({name:oldTeam}, 
    //             { $inc: { playersNumber:  -1 , spentAmount: -oldPrice , U20: (player.U20)=="Yes" ? -1:0 , A40 :(player.A40=="Yes" )  ? -1:0 }},
    //             {new:true})
    //     if(!oldTeamNumberUpdate){
    //                 throw new ApiError(400," old team Number has not been updated")
    //             }

    //     }

       

    // }

    


    
   
   
   
    

return res.status(200).json(new ApiResponse(200,{updatedPlayer},"player   updated  successfully"))

})


const getSinglePlayer=asyncHandler(async(req,res)=>{
    const {id}=req.params;

    const player=await Players.findOne({_id:id})

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


