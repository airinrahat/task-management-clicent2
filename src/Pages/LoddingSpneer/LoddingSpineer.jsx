/* eslint-disable no-unused-vars */
import React from "react";

const LoddingSpineer = () => {
  return (
    <div>
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <p className="display-1 text-body" style={{ fontSize: "85px" }}>
            L
          </p>
          <div
            className=" mx-1 rounded-circle spinner-border mt-5 text-info"
            style={{
              width: "80px",
              height: "80px",
              border: "10px dashed",
            }}
          ></div>
          <p className="display-1 text-body" style={{ fontSize: "85px" }}>
            ading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoddingSpineer;
