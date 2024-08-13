import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/users.js"; 


const loginController=asyncHandler(async(req,res)=>{

   

   const  {userName,email, password}=req.body


   console.log(userName)
   
if([userName,email,password].some((value)=>value?.trim()==="")){
    throw new ApiError(400,"All fields are necessary while log in")
}

const user=await User.findOne({userName})



if(!user){
    throw new ApiError(404,"User does not exist")
}

if(password !== user.password){
    throw new ApiError(400,"Password is wrong during login")
}







return res.status(200).json(new ApiResponse(200,
    user
,"User logged in successfully"))

})

export {loginController}