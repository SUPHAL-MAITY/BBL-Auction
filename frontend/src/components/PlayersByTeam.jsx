import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PlayersByTeam = () => {
  const [players, setPlayers] = useState([]);
  const [url, setUrl] = useState(null);

  const { team } = useParams();

  useEffect(() => {
    getAllPlayers();
    getUrl();
  }, [team]);

  const getAllPlayers = async () => {
    console.log(team);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/user/${team}`
      );
      setPlayers(data?.data?.players);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUrl = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/team/${team}`
      );
      setUrl(data?.data?.image);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="mx-14 my-4 ">
        <img style={{ width: 100, height: 100 }} src={url} alt=" Logo" />
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
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
                      Sold Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((c, i) => (
                    <tr className="odd:bg-white even:bg-gray-100" key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {c.sl}
                       
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {c.name}
                       
                      </td>
                     

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {c.soldPrice}
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
  );
};

export default PlayersByTeam;
