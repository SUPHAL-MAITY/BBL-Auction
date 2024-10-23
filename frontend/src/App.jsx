import Addplayer from "./components/Addplayer.jsx"
import Dashboard from "./components/Dashboard.jsx"
import EditForm from "./components/EditForm.jsx"
import GenerateNo from "./components/GenerateNo.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import Players from "./components/Players.jsx"
import TeamsDashboard from "./components/TeamsDashboard.jsx"
import Layout from "./Layout/Layout.jsx"
import PageNotFound from "./Layout/pageNotFound.jsx"

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  
} from "react-router-dom";




function App() {






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
             <Route path='/bid'  element={<GenerateNo/>} />
           
             <Route path='*' element={<PageNotFound/>}/>



             {/* <Route path='admin' element={<Admin/>}>
                    <Route path='/admin/dashboard'  element={<AdminDashboard/>} />
                    <Route path='/admin/dashboard/create-categories'  element={<DashboardCreate/>} />
                    <Route path='/admin/dashboard/update-categories'  element={<DashboardUpdate />} />
                    <Route path='/admin/dashboard/categories'  element={<DashboardCategories />} />
             </Route> */}

             
        

      </Route>

      

   </>

    )
  
  )


  

  return (
    <>
    <RouterProvider router={router} >   
        
    </RouterProvider>  
  
    
    
    </>
  )
}

export default App
