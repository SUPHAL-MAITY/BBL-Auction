import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useSearch from "../context/SearchContext";

const Dashboard = () => {


  const [players, setPlayers] = useState([]);
  const [filterPlayer, setFilterPlayer] = useState([]);


  const navigate = useNavigate();

  const { searchInput } = useSearch();

  useEffect(() => {
    getAllPlayers();
  }, []);

  const getAllPlayers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/user/players`
      );
      setPlayers(data?.data?.players);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleDelete=async(id)=>{
  //     console.log(id)

  //     try {
  //       await  axios.delete(
  //         `${import.meta.env.VITE_API}/api/admin/${id}`
  //       );

  //       navigate("/");

  //     } catch (error) {
  //       console.log(error);
  //     }

  // }
  


  const getFilter = () => {
    const filterData = players.filter((c) => c.sl == searchInput);
    console.log(filterData)
    setFilterPlayer(filterData);
  };

  useEffect(() => {
    if (searchInput) {
      getFilter();
    } 
  }, [searchInput]);

  

  return (
    <div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full  divide-y divide-gray-200">
                <thead className="bg-cyan-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Sl
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Batting
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Bowling
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Contacts
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Sold Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Team
                    </th>
                    {/* <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Delete</th> */}
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                
                  <tbody>
                  { (filterPlayer.length > 0 ? filterPlayer:players).map((k, i) => (
                      <tr className="odd:bg-white even:bg-gray-100" key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {k.sl}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {k.name}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {k.role}{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {k.batting}{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {k.bowling}{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {k.whatsapp}{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {k.soldPrice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {k.team}{" "}
                        </td>
                        {/* <button>
  <td type="button" onClick={()=>handleDelete(c._id)} className="px-6 py-4 whitespace-nowrap text-sm text-red-600">X</td>

  </button> */}

                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            onClick={() =>
                              navigate(`/iuw4g4V3jlcs47lZUvHhww==/${k.sl}`)
                            }
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    )) }
                    
                  </tbody>
                 


              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
