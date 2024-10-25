import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const GenerateNo = () => {


  const [rand, setRand] = useState(0);
  const [ballActive, setBallActive] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);

 



  const handleSpin = async () => {
    setBallActive(true);

    setTimeout(async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API}/api/admin/random`
        );
        console.log(data);
        setSlArray(data.slArray);
        console.log(slArray);
        let randomNo = Math.floor(Math.random() * data.slArray.length) + 1;

        setBallActive(false);
        setRand(data.slArray[randomNo - 1]);

        // alert("Array has been reset")
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  };



  const handleChange = (e) => {
    setRand(e.target.value);
  };


  const handleReset=async()=>{
    try {
      if(window.confirm("Do you want to reset the databse?")){

        const {data}= await axios.post( `${import.meta.env.VITE_API}/api/admin/reset`)
        if(data.status==200){
        alert("All unsold player has been reset to no_bid")
      }

      }
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="bid_container">
      <div className="card_container md:w-1/2 md:h-4/5 ">
        <div className={`roll_ball ${ballActive ? "" : "hidden"}`}>
          <img
            className=" "
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr14T5mEeMogHt7RwCjs8uwTgrNGSKwtB6JJmpgSjzOTw1OfEANCbObPM9vepDoQbcbHUszAZNhBG56TAdSHUEYaozsN0X8lVzLOuoEF9C5IuDZ3jJAt7bGuSzWyrPz-i_avPpPBo0XVPR/s1600/TennisBall.gif"
          />
        </div>

        <div className={`show_card ${ballActive ? "hidden" : ""}`}>{rand}</div>
      </div>

      <div className={`btn_container  ${btnVisible ? "" : "hidden"}`}>
        <button className="btn" id="btn-1" onClick={handleSpin}>
          Spin
        </button>
        <Link to={`/profile/${rand}`} target="_blank">
          <input
            name="bid_number"
            type="Number"
            value={rand}
            onChange={handleChange}
            placeholder="enter "
          />
        </Link>
       
         <button className="btn" onClick={handleReset}  >Reset</button>
      </div>
    </div>
  );
};

export default GenerateNo;
