import { Settings } from "../models/setting.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";



const settingGetController=asyncHandler(async(req,res)=>{
    
    
    
    const formState=await Settings.find({})
    if(!formState){
        throw new ApiError(400,"Unable to fetch the state of form ")
    }

    return res.status(200).json( new ApiResponse(200,{isRegistrationEnabled:formState[0].formState},"form state obtained successfully"))

})

const createSettingController=asyncHandler(async(req,res)=>{
    const formState=await Settings.create({formState:true})

    if(!formState){
        throw new ApiError(400,"form state is not created successfully")
    }
    return res.status(200).json(new ApiResponse(200,formState,"form state obtained successfully"))
})


const settingToggleController=asyncHandler(async(req,res)=>{
    const {isEnabled}=req.body;
    if(isEnabled === undefined || isEnabled === null){
        throw new ApiError(400,"unable to get the toggle boolean from from body")
    }
    
    const settings=await Settings.findOne()

    if(!settings){
       settings= await Settings.create({formState:isEnabled})
    }else{
        settings.formState=isEnabled;
        await settings.save()

    }
    
    
    return res.status(200).json( new ApiResponse(200,{},"form state updated successfully"))




})



export {settingGetController,createSettingController,settingToggleController}