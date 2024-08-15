import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-slate-100 text-gray-700 h-[calc(100vh-2rem)] w-full h-full max-w-[10rem]  sm:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          
          <div className="mb-2 p-4 mx-auto  sm:mx-24">
            <h5 className="block font-serif  text-teal-700 antialiased tracking-normal  text-xl font-semibold leading-snug text-gray-900">
             Teams
            </h5>
          </div>

          <nav className="flex flex-col gap-1 min-w-[240px]   p-2 font-sans text-base font-normal text-gray-700">
            
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto   sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/a-to-z">
              A to Z
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold text-wrap font-serif text-sm  p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/agrani-sanskritik-parishad">
              A S P
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/amit-x1-andal">
              Amit Xi
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/bajrang-x1">
              Bajrang Xi
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/banejos-blasters">
              B. BLASTERS
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/debanjan-blasters">
              D BLASTERS
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/dohomani-rs-tiger">
              D RS Tiger
              </Link>
              
            </div>

            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/dr-udayan-warriors">
              Udayan W.
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/empowered-spartan-strikers">
              E S Strikers
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/joy-dipro-bahubali">
              J D Bahubali
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/khushi-x1-sagarbhanga">
              Khushi Xi 
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/payel-multiplaza-asansol">
              P Multiplaza
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/sachin-super-kings">
              S S King
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/shakti-the-real-power">
              Shakti 
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold font-serif text-sm   p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/soumya-x1">
              Soumya Xi
              </Link>
              
            </div>
            <div
              role="button"
              className="flex font-semibold  font-serif text-sm  p-4 mx-auto  sm:mx-24 w-full  rounded-lg text-start leading-tight transition-all hover:text-red-500  active:text-red-500"
            >
              <Link to="/teams/young-bengal-niyaz-x1">
              Young Bengal
              </Link>
              
            </div>


           

           
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
