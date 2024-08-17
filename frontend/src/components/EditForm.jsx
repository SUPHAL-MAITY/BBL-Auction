import React, {  useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditForm = () => {
  const [price, setPrice] = useState(0);
  const [team, setTeam] = useState("");
  const [slug, setSlug] = useState("");
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate=useNavigate()




useEffect(()=>{
  getSinglePlayer()

},[])


 


 const getSinglePlayer= async () => {
  
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/api/admin/${id}`
    );
    
    console.log(data.data)
    setName(data.data.name)
    setPrice(data.data.soldPrice)

    
    
  } catch (error) {
    console.log(error);
  }
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/api/team/${id}`,
        { price, team,slug }
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
                      >
                        Select the Team
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                      >
                        <option value="" disabled >unsold</option>
                        <option value="A TO Z">A TO Z</option>
                        <option value="AGRANI SANSKRITIK PARISHAD">AGRANI SANSKRITIK PARISHAD</option>
                        <option value="AMIT X1 ANDAL">AMIT X1 ANDAL</option>
                        <option value="BAJRANG X1">BAJRANG X1</option>
                        <option value="BANEJOS BLASTERS">BANEJOS BLASTERS</option>
                        <option value="DEBANJAN BLASTERS">DEBANJAN BLASTERS</option>
                        <option value="DOHOMANI RS TIGER">DOHOMANI RS TIGER</option>
                        <option value="DR UDAYAN WARRIORS">DR UDAYAN WARRIORS</option>
                        <option value="EMPOWERED SPARTAN STRIKERS">EMPOWERED SPARTAN STRIKERS</option>
                        <option value="JOY DIPRO BAHUBALI">JOY DIPRO BAHUBALI</option>
                        <option value="KHUSHI X1 SAGARBHANGA">KHUSHI X1 SAGARBHANGA</option>
                        <option value="PAYEL MULTIPLAZA (ASANSOL)">PAYEL MULTIPLAZA (ASANSOL)</option>
                        <option value="SACHIN SUPER KINGS">SACHIN SUPER KINGS</option>
                        <option value="SHAKTI THE REAL POWER">SHAKTI THE REAL POWER</option>
                        <option value="SOUMYA X1">SOUMYA X1</option>
                        <option value="YOUNG BENGAL NIYAZ  X1">YOUNG BENGAL NIYAZ  X1</option>
                        
                      </select>
                    </div>
                  </div>

                  <div className="mt-2 ">
                    <div className="max-w-sm mx-auto">
                      <label
                        htmlFor="slug"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select the slug
                      </label>
                      <select
                        id="slug"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                      >
                        <option value="" disabled >unsold</option>
                        <option value="a-to-z">a-to-z</option>
                        <option value="agrani-sanskritik-parishad">agrani-sanskritik-parishad</option>
                        <option value="amit-x1-andal">amit-x1-andal</option>
                        <option value="bajrang-x1">bajrang-x1</option>
                        <option value="banejos-blasters">banejos-blasters</option>
                        <option value="debanjan-blasters">debanjan-blasters</option>
                        <option value="dohomani-rs-tiger">dohomani-rs-tiger</option>
                        <option value="dr-udayan-warriors">dr-udayan-warriors</option>
                        <option value="empowered-spartan-strikers">empowered-spartan-strikers</option>
                        <option value="joy-dipro-bahubali">joy-dipro-bahubali</option>
                        <option value="khushi-x1-sagarbhanga">khushi-x1-sagarbhanga</option>
                        <option value="payel-multiplaza-asansol">payel-multiplaza-asansol</option>
                        <option value="sachin-super-kings">sachin-super-kings</option>
                        <option value="shakti-the-real-power">shakti-the-real-power</option>
                        <option value="soumya-x1">soumya-x1</option>
                        <option value="young-bengal-niyaz-x1">young-bengal-niyaz-x1</option>
                        
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
