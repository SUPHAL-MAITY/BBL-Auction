import React, {  useEffect, useState,useId } from "react";

import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Addplayer = () => {

  
  const [sl,setSl]=useState(0)
  const [name, setName] = useState("");
  const [nickName,setNickName ] = useState("");
  const [dob,setDob ] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode,setPinCode ] = useState("");
  
  const [role,setRole] = useState("");
  const [batting,setBatting] = useState("");
  const [bowling,setBowling] = useState("");
  const [whatsAppNo,setWhatsAppNo] = useState("");
  const [basePrice,setBasePrice] = useState("");
 

//sl,name, nickName, dob,address,pinCode, U20, A40, role, batting, bowling, whatsAppNo, basePrice
  
  
  const navigate=useNavigate()


  // const generateId=()=>{
  //   let newId;

  //   do{
  //     newId= (Math.floor(Math.random()*9000)  +1000).toString()

  //   }while(previousId.includes(newId))

  //     setId(newId)
  // }
  
  


  




// useEffect(()=>{
  
  

// },[])


 


//  const getSinglePlayer= async () => {
  
//   try {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API}/api/admin/${id}`
//     );
    
//     console.log(data.data)
//     setName(data.data.name)
//     setPrice(data.data.soldPrice)

    
    
//   } catch (error) {
//     console.log(error);
//   }
// };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/api/user/add`,
        {sl,name, nickName,dob,address,pinCode,  role, batting, bowling, whatsAppNo, basePrice }
      );
     
      if (data) {
        alert("player has been updated");
      }
      navigate("/iuw4g4V3jlcs47lZUvHhww==");
    } catch (error) {
      console.log(error);
    }
  };





  return (
    <div>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="font-serif  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add  Player
        </h2>

        <div>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">

              <div className="mt-2 font-serif   ">
                  <input
                    id="sl"
                    name="sl"
                    value={sl}
                    type="number"
                    onChange={(e) => setSl(e.target.value)} 
                    placeholder=" Serial number"
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

              <div className="mt-2 font-serif   ">
                  <input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name of the player"
                    
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2 font-serif   ">
                  <input
                    id="nickName"
                    name="nickName"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                    type="text"
                    placeholder="Nick Name of the player"
                    required
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2 font-serif   ">
                  <input
                    id="dob"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    type="Date"
                    placeholder="Enter the date of birth"
                    required
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2 font-serif   ">
                  <input
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Enter the address"
                    required
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2 font-serif   ">
                  <input
                    id="pinCode"
                    name="pinCode"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    type="Number"
                    placeholder="Enter the pincode"
                    required
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>



               



            


                <div className="mt-2 ">
                  <div className="max-w-sm mx-auto">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      
                    </label>
                    <select
                      id="role"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="" disabled >Role</option>
                      <option value="Yes">BOWLER</option>
                      <option value="No">BATSMAN</option>
                      <option value="No">ALLROUNDER</option>
                      
                      
                    </select>
                  </div>
                </div>



                <div className="mt-2 ">
                  <div className="max-w-sm mx-auto">
                    <label
                      htmlFor="batting"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={batting}
                      onChange={(e) => setBatting(e.target.value)}
                    >
                      <option value="" disabled >Batting hand</option>
                      <option value="Yes">RIGHTY</option>
                      <option value="No">LEFTY</option>
                      <option value="No">I CAN'T BAT</option>
                      
                      
                    </select>
                  </div>
                </div>




                <div className="mt-2 ">
                  <div className="max-w-sm mx-auto">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      
                    </label>
                    <select
                      id="bowling"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={bowling}
                      onChange={(e) => setBowling(e.target.value)}
                    >
                      <option value="" disabled >Bowling hand </option>
                      <option value="Yes">RIGHTY</option>
                      <option value="No">LEFTY</option>
                      <option value="No">I CAN'T BOWL</option>
                      
                      
                    </select>
                  </div>
                </div>



                <div className="mt-2 font-serif   ">
                  <input
                    id="phone"
                    name="phone"
                    value={whatsAppNo}
                    type="number"
                    onChange={(e) => setWhatsAppNo(e.target.value)} 
                    placeholder=" Whats App Number"
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>


                <div className="mt-2 font-serif   ">
                  <input
                    id="basePrice"
                    name="basePrice"
                    value={basePrice}
                    type="number"
                    onChange={(e) => setBasePrice(e.target.value)} 
                    placeholder="Base Price"
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>




                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Player
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Addplayer
