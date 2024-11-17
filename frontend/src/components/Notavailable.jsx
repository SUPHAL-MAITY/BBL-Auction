import React from "react";
import "../App.css";

const Notavailable = () => {
  return (
    <div>
      <div className="boxes-box">
        <div className="box">
          <div className="box-header alert">
            <i class="box-icon fa fa-exclamation-triangle"></i>
          </div>
          <div className="box-content">
            <h3>Watch Out!</h3>
            Registration deadline  passed. Please contact committee.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notavailable;
