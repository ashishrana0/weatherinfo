import React from "react";

const Wdetails = ({ tempInfo, tempIcon }) => {
  return (
    <>  
      <div className="col-md-2">
        <p className="card-text">{tempInfo}</p>
      </div>
    </>
  );
};

export default Wdetails;
