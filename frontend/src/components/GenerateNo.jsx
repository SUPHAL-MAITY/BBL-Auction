import React, { useEffect } from 'react'
import "../App.css"
import { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";




const GenerateNo = () => {



  const [rand,setRand]=useState(0)
  const [ballActive,setBallActive]=useState(false)
  const [slArray,setSlArray]=useState(JSON.parse(localStorage.getItem("myArray")) ||[])
  const [serialNumber,setSerialNumber]=useState(0)
  const [btnVisible,setBtnVisible]=useState(false)

  



useEffect(()=>{
 const data= localStorage.getItem("id")
 if(data){
  setBtnVisible(true)
 }

 

},[])


  const handleSpin=()=>{
    setBallActive(true)
    console.log("ball active")

    setTimeout(()=>{
      console.log("inside time out")
      setBallActive(false)
      let randomNo=Math.floor(Math.random()*slArray.length)+1
      console.log(randomNo)
      setSerialNumber(randomNo)
      setRand(slArray[randomNo-1])


    },3000)
    

  }


  const handleReset=async()=>{
    try {
      const {data}=await axios.get( `${import.meta.env.VITE_API}/api/admin/random`)
      console.log(data)
      setSlArray(data.slArray)
      alert("Array has been reset")
      
    } catch (error) {
      console.log(error)
      
    }
     

  }



  const handleBid=()=>{
    console.log("rand:",rand)

    let index=slArray.indexOf(parseInt(rand))

    if(slArray[serialNumber-1]!==slArray[index]){
      setSerialNumber(index+1)
      console.log("they are not same")

    }

    

    console.log("handle Bid clicked")
    console.log("serialN0:",serialNumber)
    // slArray.splice(serialNumber-1,1)
    slArray.splice(index,1)
    console.log(slArray)
    localStorage.setItem("myArray",JSON.stringify(slArray))
    setRand(0)
    alert("player has been removed from auction pool for now")

    

  }


  const handleChange=(e)=>{
    setRand(e.target.value)
    
   

  }

  return (
    <div className='bid_container'>
     

      <div className="card_container md:w-1/2 md:h-4/5 ">
            <div className={`roll_ball ${ballActive? "":"hidden" }`} >
              <img  className=' ' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr14T5mEeMogHt7RwCjs8uwTgrNGSKwtB6JJmpgSjzOTw1OfEANCbObPM9vepDoQbcbHUszAZNhBG56TAdSHUEYaozsN0X8lVzLOuoEF9C5IuDZ3jJAt7bGuSzWyrPz-i_avPpPBo0XVPR/s1600/TennisBall.gif' />

            </div>

            <div className={`show_card ${ballActive? "hidden":"" }`} >
              {rand}
            </div>

            

      </div>

      <div className={`btn_container  ${btnVisible ?"":"hidden"}`}>
        <button className="btn" id='btn-1' onClick={handleSpin}>Spin</button>
        <Link  to={`/profile/${rand}`}  target="_blank">
           <input name='bid_number'   type='Number' value={rand} onChange={handleChange} placeholder='enter '  />
        </Link>
        <button className="btn" onClick={handleBid}>Bid</button>
        <button className="btn" onClick={handleReset}  >Reset</button>
       


      </div>

     
      
    </div>
  )
}

export default GenerateNo
