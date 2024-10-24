import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditForm = () => {


  const [price, setPrice] = useState(0);
  const [team, setTeam] = useState("");
  const [name, setName] = useState("");
  const [teamArray, setTeamArray] = useState([]);
  const [sl,setSl ] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/team/all`
      );
      console.log(data?.data);
      setTeamArray(data?.data);
    } catch (error) {
      console.log(error);
    }
  };











  useEffect(() => {
    getSinglePlayer();
  }, []);



  const getSinglePlayer = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/admin/${id}`
      );

      console.log(data.data);
      setName(data?.data?.name);
      setPrice(data?.data?.soldPrice);
      setSl(data?.data?.sl)

    } catch (error) {
      console.log(error);
    }
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/api/team/${id}`,
        { price, team }
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
            Update Player
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
                      onChange={(e) => setSl(e.target.value)}
                      type="Number"
                      disabled
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
                      disabled
                      className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="mt-2 font-serif   ">
                    <input
                      id="price"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      placeholder="write the sold price of the player"
                      required
                      className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-2 ">
                    <div className="max-w-sm mx-auto">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      ></label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                      >
                        <option value="" disabled>
                          Select One Option
                        </option>
                        <option value="no_bid" >
                          No Bid
                        </option>
                        <option value="unsold">unsold</option>
                        {teamArray.map((c,i)=>(
                          <option key={i} value={c.name}>{c.name}</option>
                        ))}                       
                      </select>
                    </div>
                  </div>


                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
