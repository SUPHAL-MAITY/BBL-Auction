import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";

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
   <>
   <div className="pbt_img ">
  <img  src={url} alt=" Logo" />
</div>

<div className="table__container">
        <table className="table ">
          <thead>
            <tr>
              <th className="head_attribute"> Sl</th>
              <th className="head_attribute"> Name</th>
              <th className="head_attribute">Role</th>
              <th className="head_attribute">Sold Price</th>
            </tr>
          </thead>
          {players.map((c, i) => {
            

            return (
              <tbody className="row" key={i}>
                <tr className="row_attribute">
                  <td>{c.sl}</td>
                  <td>{c.name}</td>
                  <td>{c.role}</td>
                  <td>{c.soldPrice}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
   
   
   </>
  );
};

export default PlayersByTeam;
