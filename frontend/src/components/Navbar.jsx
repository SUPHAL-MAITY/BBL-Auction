import React, { useState,useEffect } from "react";
import {  useNavigate,useLocation } from "react-router-dom";
import "../App.css"
import useSearch from "../context/SearchContext";


const Navbar = () => {

 

  const [isOpen, setIsOpen] = useState(false);
  const  [id,setId]=useState("")
  const [input,setInput]=useState("")
  
  const navigate = useNavigate();
  const location=useLocation()

  
  const {updateSearchInput}=useSearch()

  
  
 


  useEffect(()=>{

    const id = localStorage.getItem("id")
    setId(id)
   
 
   },[])


   const handleLogout=()=>{
    console.log("log out")
    localStorage.removeItem("id")
    setId("")
    navigate("/")
   }


   const addPlayer=()=>{
    navigate("/addplayer")
   }


   const handleChange=(e)=>{
    updateSearchInput(e.target.value)

   }




  return (
    <>
      <nav className="flex min-w-max  bg-cyan-600 items-center justify-between  p-6  ">
        <div className=" block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block  flex-grow  lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm  lg:flex-grow">
            <a
              href="/"
              className="block text-lg font-serif mt-4 lg:inline-block lg:mt-0 font-bold text-white mr-4"
            >
              Home
            </a>
            <a
              href="/players"
              className="block text-lg font-serif mt-4 lg:inline-block lg:mt-0 font-bold text-white mr-4"
            >
              Players
            </a>
            <a
              href="/teams/Akash-11"
              className="block text-lg font-serif  mt-4 lg:inline-block lg:mt-0 font-bold text-white mr-4"
            >
              Teams
            </a>
             <a
              href="/login"
              className="block text-lg font-serif mt-4 lg:inline-block lg:mt-0 font-bold text-white mr-4"
            >
              Admin
            </a>


            <button
              
              className="block text-lg font-serif mt-4 lg:inline-block lg:mt-0 font-bold text-white mr-4"
              onClick={()=>addPlayer()}
            >
              {id? "Add Player":""}
            </button>
            

            <button
              
              className="block text-lg font-serif mt-4 lg:inline-block lg:mt-0 font-bold text-white mr-4"
              onClick={()=>handleLogout()}
            >
              {id? "Logout":""}
            </button>
           


          </div>
        </div>
        <div className="text-center sm:text-right">
          <h1
            className={`hidden md:block text-yellow-400 mr-10 font-serif text-2xl  ${
              isOpen ? "hidden" : "block"
            }`}
          >
               {location.pathname=="/iuw4g4V3jlcs47lZUvHhww=="? <input id="search_bar" onChange={handleChange} placeholder=" Search serial number"/>:"Welcome to DPL7 Live Auction"} 
          </h1>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dobdrg18h/image/upload/v1723892598/auction_mrmesv.jpg"
            style={{ widht: "60px", height: "60px", borderRadius: "60px" }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
