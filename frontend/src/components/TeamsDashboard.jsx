import React from "react";
import Sidebar from "./Sidebar.jsx";
import PlayersByTeam from "./PlayersByTeam.jsx";

const TeamsDashboard = () => {


  return (
    <div className="flex ">
      <div className="">
      <Sidebar />

      </div>
      
      <div className="mt-7 text-center ml-2 text-red-500 text-xl sm:text-2xl font-serif italic hover:not-italic">
       select one team fron the Sidebar
       
           
       <div className="flex-initial w-64  md:w-96 lg:w-full">
        <PlayersByTeam/>
       </div>

      </div>
    </div>
  );
};

export default TeamsDashboard;
