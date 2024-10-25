import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/team/all`
      );
      console.log(data?.data);
      setTeams(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="relative flex flex-col bg-slate-100 bg-clip-border rounded-xl  text-gray-700 h-[calc(100vh-2rem)] w-full h-full max-w-[7rem]  sm:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4 mx-auto  sm:mx-24">
            <h5 className="block font-serif  text-teal-700 antialiased tracking-normal  text-xl font-semibold leading-snug text-gray-900">
              Teams
            </h5>
          </div>

          <nav className="flex flex-col  min-w-[240px]  p-1 font-sans text-base font-normal text-gray-700 ">
            {teams.map((c,i) => (
              <div key={i}
                role="button"
                className=" flex font-semibold  font-serif text-sm   p-4 mx-auto   sm:mx-24 w-full  rounded-lg text-start leading-3 sm:leading-tight transition-all hover:text-red-500  active:text-red-500"
              >
                <Link to={`/teams/${c.slug}`}><p className="truncate w-20 sm:w-36 sm:truncate  md:w-full  ">{c.name}</p> </Link>
              </div>
            ))}

          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
