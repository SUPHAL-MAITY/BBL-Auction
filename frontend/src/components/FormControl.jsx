import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const FormControl = () => {
    const [isEnabled,setIsEnabled]=useState(false)
    const [loading,setLoading]=useState(false)


    useEffect(()=>{
        fetchFormStatus()

    },[])

    const fetchFormStatus=async()=>{
        setLoading(true)
        try {
            const {data}=await axios.get(
                `${import.meta.env.VITE_API}/api/form/get-status`
              );
              console.log(data)
              setIsEnabled(data?.data?.isRegistrationEnabled)
            
        } catch (error) {
            console.error(error)
            
        }finally{
            setLoading(false)
        }

    }

    const handleChange=async(e)=>{
        e.preventDefault();
        setLoading(true)
        const newStatus = !isEnabled;
        setIsEnabled(newStatus)
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API}/api/form/toggle-status`,
                { isEnabled :newStatus }
              );
              console.log(data)
            
        } catch (error) {
            console.log(error)
            setIsEnabled(!newStatus)
            
        }finally{
            setLoading(false)
        }
        
        
    }
    
  return (
    <div className="full_container_form">
         <div className="form_control_container">

         {loading && <Loader/>}

         {!loading &&   (
            <div>
                 <h1> Form control </h1>

                    <div className="checkbox-apple">
                    <input className="yep" id="check-apple" checked={isEnabled} onChange={handleChange} type="checkbox" />
                    <label htmlFor="check-apple" />
                    </div>

                 </div>
             
         )}
    
    </div>

    </div>
   
  );
};

export default FormControl;
