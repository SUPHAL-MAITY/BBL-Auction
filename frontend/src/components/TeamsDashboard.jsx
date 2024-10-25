import React from "react";
import Sidebar from "./Sidebar.jsx";
import PlayersByTeam from "./PlayersByTeam.jsx";

const TeamsDashboard = () => {
  return (
    <div className="flex ">
        
        <Sidebar />

        
         
      
         <div className="bg-slate-100 flex-initial w-64   md:w-96 lg:w-full mt-7 text-center ml-2 text-red-500 text-xl sm:text-2xl font-serif italic hover:not-italic">
      
          <PlayersByTeam />
        
        </div>
    </div>
  );
};

export default TeamsDashboard;
