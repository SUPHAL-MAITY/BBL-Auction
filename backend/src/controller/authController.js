import { asyncHandler } from "../utils/asyncHandler.js"; 
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/users.js"; 



const registerController=asyncHandler(async(req,res)=>{

   

  

  
   const {userName,email,password}=req.body
  

   if([userName,email,password,address,phone,usertype,answer].some((value)=>value?.trim()==="")){
       throw new ApiError(400,"All fields are necessary")
   }

   const existing=await User.findOne({email})

   if(existing){
       throw new ApiError(409,"Email already registered please login")
   }



   const user=await User.create({
      userName,
      email,
      password,
      


   })

const createdUser=await User.findById(user._id)

if(!createdUser){
   throw new ApiError(500,"There is something wrong while registering the user")
}

return res.status(201).json(
   new ApiResponse(200,createdUser,"user registered successfully")
)


})


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


///previous login controller

// const loginController=asyncHandler(async(req,res)=>{

   

//    const  {userName,email, password}=req.body


//    console.log(userName)
   
// if([userName,email,password].some((value)=>value?.trim()==="")){
//     throw new ApiError(400,"All fields are necessary while log in")
// }

// const user=await User.findOne({userName})



// if(!user){
//     throw new ApiError(404,"User does not exist")
// }

// if(password !== user.password){
//     throw new ApiError(400,"Password is wrong during login")
// }







// return res.status(200).json(new ApiResponse(200,
//     user
// ,"User logged in successfully"))

// })







export {loginController}