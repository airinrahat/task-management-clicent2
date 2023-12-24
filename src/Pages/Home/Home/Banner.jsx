/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {" "}
      <div className="bg-[url(https://i.ibb.co/vjJWdnb/pm-software.jpg)] bg-center bg-no-repeat bg-cover    lg:py-26 md:pt-44 pt-40">
        <div className="card-body flex items-center justify-center pb-36 ">
          <div>
            <h2 className=" justify-center text-2xl card-title lg:text-4xl md:text-4xl  font-bold text-white">
              Search Between More Then 50,000 Open tasks.
            </h2>
            <p className=" text-center text-white  md:text-xl">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              <br />
              Nullam aliquam augue vitae nisi faucibus, utricies mtus accumsan.
              <br />
              Broder eletum diam sit amet opus vulputate. Praesent fermentum,
            </p>
            <div className="text-center mt-8 ">
              <button>
                <NavLink
                  className="bg-[#00bcc2] rounded text-white p-3 px-16"
                  to="/dashboard/profile"
                >
                  Let’s Explore
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
