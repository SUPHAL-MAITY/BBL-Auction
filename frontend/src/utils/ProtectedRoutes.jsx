import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRotes = () => {
    const [token,setToken]=useState("")
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
      let id=localStorage.getItem("id")
      setToken(id)
      setLoading(false)

    },[])

    if (loading) {
     
      return <div>Loading...</div>;
  }


  return (
    <div>
        {token ? <Outlet/> :<Navigate to="/no-page-found"/> }
      
    </div>
  )
}

export default ProtectedRotes
