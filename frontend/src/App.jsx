import Addplayer from "./components/Addplayer.jsx"
import Dashboard from "./components/Dashboard.jsx"
import EditForm from "./components/EditForm.jsx"
import GenerateNo from "./components/GenerateNo.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import Players from "./components/Players.jsx"
import Profile from "./components/Profile.jsx"
import TeamsDashboard from "./components/TeamsDashboard.jsx"
import Layout from "./Layout/Layout.jsx"
import PageNotFound from "./Layout/pageNotFound.jsx"
import { SearchProvider } from "./context/SearchContext.jsx"
import { useState } from "react"

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  
} from "react-router-dom";




function App() {


  const [searchInput,setSearchInput]=useState("")


  const  updateSearchInput=(input)=>{
    setSearchInput(input)

  }



  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
    
      <Route path='/'  element={<Layout/>} >
             <Route path='/'  element={<Home/>} />
             <Route path='/players'  element={<Players/>} />
             <Route path='/addplayer'  element={<Addplayer/>} />
             <Route path='/login'  element={<Login/>} />
             <Route path='/teams/:team'  element={<TeamsDashboard/>} />
             <Route path='/iuw4g4V3jlcs47lZUvHhww=='  element={<Dashboard/>} />
             <Route path='/iuw4g4V3jlcs47lZUvHhww==/:id'  element={<EditForm/>} />
             
           
             <Route path='*' element={<PageNotFound/>}/>

            

      </Route>

     

      <Route path='/'  >
             
             <Route path='/bid'  element={<GenerateNo/>} />
             <Route path='/profile/:id'  element={<Profile/>} />

      </Route>


      

   </>

    )
  
  )


  

  return (
    <>
    <SearchProvider value={{searchInput,updateSearchInput}} >
    <RouterProvider router={router} >   
        
        </RouterProvider>  
      

    </SearchProvider>
    
    
    
    </>
  )
}

export default App
