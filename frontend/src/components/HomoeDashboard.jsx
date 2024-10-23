import React, { useMemo, useState,useEffect } from "react";
import axios from "axios";
import Timer from "./Timer";





const HomoeDashboard = () => {

  let playersToBuy=15;
  let basePrice=1000;
  let totalAuctionPrice=50000;


  const [teams,setTeams]=useState([])


  useEffect(()=>{
    getAllTeams();

  },[])






  const getAllTeams=async()=>{
    try {
        const {data}= await axios.get(`${import.meta.env.VITE_API}/api/home/teams`);
        setTeams(data?.data?.teams)
        console.log(data?.data?.teams)
        
        
        
    } catch (error) {
      console.log(error)
        
    }
}





 
  return (
    <>
    

  <div className="flex flex-col ">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full  divide-y divide-gray-200">
            <thead className="bg-cyan-100">
              <tr>
                <th scope="col" className="px-6 py-1 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                
                <th scope="col" className="px-6 py-1 text-start text-xs font-medium text-gray-500 uppercase">Amount Spent</th>
                <th scope="col" className="px-6 py-1 text-start text-xs font-medium text-gray-500 uppercase">Remaining Amount</th>
            
                <th scope="col" className="px-6 py-1 text-start text-xs font-medium text-gray-500 uppercase">Total Players</th>
                <th scope="col" className="px-6 py-1 text-start text-xs font-medium text-gray-500 uppercase">Max Bid</th>
        
              </tr>
            </thead>
            <tbody>
              {teams.map((c,i)=>(
                <tr className="odd:bg-white even:bg-gray-100" key={i}>
                <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800">{c.name}</td>
                <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800">{c.spentMoney} </td>
                <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800">{totalAuctionPrice -c.spentMoney }</td>
               
                <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800">{c.totalPlayers? c.totalPlayers:0} </td>
                <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800">{ c.totalPlayers==15 ?0 :  (totalAuctionPrice -c.spentMoney)- ((playersToBuy-1-c.totalPlayers)*basePrice)} </td>
        
              </tr>

              ))}
              
             
             
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
      
    </>
  );
};

export default HomoeDashboard;
