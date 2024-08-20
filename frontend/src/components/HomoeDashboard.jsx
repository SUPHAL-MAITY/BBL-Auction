import React, { useMemo, useState,useEffect } from "react";
import axios from "axios";
import Timer from "./Timer";





const HomoeDashboard = () => {


  const [teams,setTeams]=useState([])


  useEffect(()=>{
    getAllTeams();

  },[])






  const getAllTeams=async()=>{
    try {
        const {data}= await axios.get(`${import.meta.env.VITE_API}/api/home/all`);
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
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Amount Spent</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Remaining Amount</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">40+</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">20-</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Total Players</th>
        
              </tr>
            </thead>
            <tbody>
              {teams.map((c,i)=>(
                <tr className="odd:bg-white even:bg-gray-100" key={i}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{c.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.spentAmount} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{50000 -c.spentAmount }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.A40} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.U20} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.playersNumber ? c.playersNumber:0} </td>
        
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
