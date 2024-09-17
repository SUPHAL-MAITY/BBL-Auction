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

    const player =await Players.findById({_id:id})

    const oldPrice= player.soldPrice;
    const newPrice=price;

    console.log(oldPrice)
    console.log(newPrice)


    const oldTeam= player.team ;
    const newTeam=team

    console.log(oldTeam)
    console.log(newTeam)


    const toBeIncreasedAmount= (newPrice-oldPrice);

    console.log(toBeIncreasedAmount)

    
    
    
    const updatedPlayer=await Players.findByIdAndUpdate(id, {soldPrice:price, team:team,slug},{new:true})

    if(!updatedPlayer){
        throw new ApiError(400,"player has not been updated")

    }


    


    if(oldTeam==newTeam){

        const numberUpdate =await Teams.findOneAndUpdate({name:team}, 
            { $inc: {  spentAmount:toBeIncreasedAmount }},
            {new:true})


            if(!numberUpdate){
                throw new ApiError(400,"Number has not been updated")
            }

        

    }else{
        const newTeamNumberUpdate =await Teams.findOneAndUpdate({name:team}, 
            { $inc: { playersNumber:  1 , spentAmount: price , U20: (player.U20)=="Yes" ? 1:0 , A40 :(player.A40=="Yes" )  ? 1:0 }},
            {new:true})
        if(!newTeamNumberUpdate){
                throw new ApiError(400," new team Number has not been updated")
            }

        if(oldTeam !== "unsold"){

        const oldTeamNumberUpdate =await Teams.findOneAndUpdate({name:oldTeam}, 
                { $inc: { playersNumber:  -1 , spentAmount: -oldPrice , U20: (player.U20)=="Yes" ? -1:0 , A40 :(player.A40=="Yes" )  ? -1:0 }},
                {new:true})
        if(!oldTeamNumberUpdate){
                    throw new ApiError(400," old team Number has not been updated")
                }

        }

       

    }

    


    
   
   
   
    

return res.status(200).json(new ApiResponse(200,{},"players  and team updated  successfully"))

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


    const {sl,name,nickName}=req.body

    if(!title || !location){
        throw new ApiError(400,"please provide title and address")
    }

    const newRestaurant=new Restaurant({
        title,imageUrl,foods,pickup,delivery,isOpen,logoUrl,rating,ratingCount,location,owner:req.user._id
    })
    
    await newRestaurant.save()

    res.status(200).json(new ApiResponse(200,{},"New  restaurant created successfully"))






})

export {editPlayer,getSinglePlayer}


