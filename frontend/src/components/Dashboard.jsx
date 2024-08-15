import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
    const[players,setPlayers]=useState([])
    const navigate=useNavigate()


    useEffect(()=>{
        getAllPlayers();
        
     },[])
  
      const getAllPlayers=async()=>{
          try {
              const {data}= await axios.get(`${import.meta.env.VITE_API}/api/user/players`);
              setPlayers(data?.data?.players)
              console.log(data.data)
              
              
          } catch (error) {
            console.log(error)
              
          }
      }
  


  return (

    <div>
  
  
  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full  divide-y divide-gray-200">
            <thead className="bg-cyan-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">U20</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">A40</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Role</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Batting</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Bowling</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Contacts</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Sold Price</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Team</th>
                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              {players.map((c,i)=>(
                <tr className="odd:bg-white even:bg-gray-100" key={i}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{c.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.U20} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.A40}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.role} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.batting} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.bowling} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.whatsAppNo} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.soldPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{c.team} </td>
                
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button type="button"  onClick={()=>navigate(`/dashboard/${c._id}`)} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Edit</button>
                </td>
              </tr>

              ))}
              
             
             
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Dashboard