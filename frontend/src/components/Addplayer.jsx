import React, { useEffect, useState, useId } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Addplayer = () => {
  const [sl, setSl] = useState(0);
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [dob, setDob] = useState("");
  const [pincode, setPincode] = useState("");
  const [role, setRole] = useState("");
  const [batting, setBatting] = useState("");
  const [bowling, setBowling] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [jersey, setJersey] = useState("");
  const [url, setUrl] = useState("");
  
  const navigate = useNavigate();

  // sl,name, nickName, dob,role,url, batting, bowling,jersey,pincode, whatsapp

  useEffect(() => {
    getPlayerCount();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/api/user/add`,
        {
          sl,name, nickName, dob,role, batting, bowling,jersey,pincode, whatsapp,url

        }
      );

      if (data) {
        alert("player has been updated");
      }
      navigate("/iuw4g4V3jlcs47lZUvHhww==");
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayerCount = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/admin/count`
      );

      console.log(data);
      setSl(data?.count +1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="font-serif  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add Player
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
                      placeholder="Unique Serial number"
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
                      type="date"
                      placeholder="YYYY-MM-DD"
                      required
                      className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-2 font-serif   ">
                    <input
                      id="jersey"
                      name="jersey"
                      value={jersey}
                      onChange={(e) => setJersey(e.target.value)}
                      type="text"
                      placeholder="Enter the jersey Size"
                      required
                      className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-2 font-serif   ">
                    <input
                      id="pincode"
                      name="pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      type="Number"
                      placeholder="Enter the pincode"
                      required
                      className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-2 ">
                    <div className="max-w-sm mx-auto">
                      <label
                        htmlFor="role"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      ></label>
                      <select
                        id="role"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="" disabled>
                          Role
                        </option>
                        <option value="Bowling All-rounder">Bowling All-rounder</option>
                        <option value="Batsman/ Wicket-keeper">Batsman/ Wicket-keeper</option>
                        <option value="Batting All-rounder">Batting All-rounder</option>
                        <option value="Bowler">Bowler</option>
                        <option value="Batsman">Batsman</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-2 ">
                    <div className="max-w-sm mx-auto">
                      <label
                        htmlFor="batting"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      ></label>
                      <select
                        id="batting"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={batting}
                        onChange={(e) => setBatting(e.target.value)}
                      >
                        <option value="" disabled> Batting hand</option>
                        <option value="Right Handed">Right Handed</option>
                        <option value="Left Handed">Left Handed</option>
                        <option value="Not Applicable">Not Applicable</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-2 ">
                    <div className="max-w-sm mx-auto">
                      <label
                        htmlFor="bowling"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      ></label>
                      <select
                        id="bowling"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={bowling}
                        onChange={(e) => setBowling(e.target.value)}
                      >
                        <option value="" disabled>
                          Bowling hand{" "}
                        </option>
                        <option value="Right Handed">Right Handed</option>
                        <option value="Left Handed">Left Handed</option>
                        <option value="Not Applicable">Not Applicable</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-2 font-serif   ">
                    <input
                      id="phone"
                      name="phone"
                      value={whatsapp}
                      type="number"
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder=" Whats App Number"
                      className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-2 font-serif   ">
                    <input
                      id="url"
                      name="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      type="text"
                      placeholder="please provide image link only"
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
  );
};

export default Addplayer;
