import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Players from "./components/Players.jsx"
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
