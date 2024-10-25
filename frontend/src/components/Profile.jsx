import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  let { id } = useParams();
  const [player, setPlayer] = useState([]);
 


  const handleRefresh=()=>{
    window.location.reload()
  }
  

  useEffect(() => {
    fetchProfile();
  }, []);


  
  



  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/admin/${id}`
      );
      console.log(data);
      setPlayer(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full  profile max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg"
            src={player.url}
          />
          <h5 className="mb-1  py-1 text-2xl font-medium font-serif text-gray-900 dark:text-white"> 
           {player.name}
          </h5>
          
          <span className="text-sm  py-2 text-gray-900 font-serif  dark:text-gray-400">
          <span className="font-bold px-1">Role</span> {player.role}    
          </span>

          <h3 className="mb-1 text-sm py-2 font-medium font-serif text-gray-900 dark:text-white">
         <span className="font-bold px-1">Serial No:</span> {player.sl}
          </h3>

          <h3 className="mb-1 text-sm py-2 font-medium font-serif text-gray-900 dark:text-white">
         <span className="font-bold px-1">Nick_Name:</span> {player.nickName}
          </h3>

          <h3 className="mb-1 text-sm py-2 font-medium font-serif text-gray-900 dark:text-white">
         <span className="font-bold px-1">Batting:</span> {player.batting}
          </h3>

          <h5 className="mb-1 py-2 text-sm font-serif  font-medium text-gray-900 dark:text-white">
          <span className="font-bold px-1">Bowling :</span> : {player.bowling}
           
          </h5>
          <h5 className="mb-1 py-2 text-sm font-serif  font-medium text-gray-900 dark:text-white">
          <span className="font-bold px-1">Team :</span> {player.team}
           
          </h5>

          <h5 className="mb-1 py-2 text-sm font-serif  font-medium text-gray-900 dark:text-white">
          <span className="font-bold px-1">Sold Amount:</span> {player.soldPrice}
           
          </h5>
          <h5 className="mb-1 py-2 text-sm font-serif  font-medium text-gray-900 dark:text-white">
          <span className="font-bold px-1">DOB :</span> {player.dob}
           
          </h5>
          <div className="flex mt-2 md:mt-2">

            {/* edit and back homw button */}

            {/* <a
              href={`/iuw4g4V3jlcs47lZUvHhww==/${id}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </a>
            <a
              href="/"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Back to Home
            </a> */}

            <button onClick={handleRefresh} className="btn w-36">Refresh</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
