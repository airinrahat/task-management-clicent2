/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaArchive,
  FaBriefcase,
  FaBriefcaseMedical,
  FaPencilRuler,
} from "react-icons/fa";
const BenefitCard = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-5 py-16 lg:px-0 px-10">
        <h2 className="lg:text-5xl text-xl font-bold  text-center">
          Benefit People
        </h2>
        <p className=" text-center mt-5 mb-7">
          This website aims to cater to a diverse audience, offering valuable
          content and<br></br> fostering a community that spans various
          professions and interests..
        </p>
        <div className="grid lg:grid-cols-3 gap-10  grid-cols-1">
          {/* <div className="card glass w-full shadow-xl border">
            <div className="card-body text-center ">
              <span className="flex justify-center items-center text-7xl  text-white  ">
                <FaBriefcase className="bg-[#18ad50] p-3  rounded-lg  text-white "></FaBriefcase>
              </span>
              <h4 className="text-gray-400 "> Web & Software Dev</h4>
              <p className="text-[#18ad50] ">122 Jobs</p>
            </div>
          </div> */}

          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/x19Ztk0/developers.jpg"
                alt="Developers"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Corporate Professionals</h2>
              <p>
                Stay informed about industry trends, management practices, and
                technological advancements. Explore articles on leadership,
                project management, and strategies for professional growth
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/KW0gGRK/corporate-lifestyle-confident-professional-team-successful-sitting-modern-conference-room-154574827.jpg"
                alt="Developers"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                Developers and Programmers
              </h2>
              <p>
                {" "}
                Access to coding tips, programming tutorials, and discussions on
                the latest technologies. Engage with a community of like-minded
                developers, seek help, and share expertise.
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/Prm3Dv6/maxresdefault.jpgg"
                alt="Developers"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Bankers and Finance</h2>
              <p>
                {" "}
                Gain insights into financial technologies, blockchain, and the
                intersection of finance and technology. Stay updated on
                regulatory changes and emerging trends in the financial sector.
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/LZFd8kb/group-photo-e1594051116441-1280x0-c-default.jpg"
                alt="Developers"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Students and Aspiring</h2>
              <p>
                Find educational content, career advice, and insights into
                various industries. Connect with mentors, explore different
                career paths, and stay informed about the skills needed in the
                job market.
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/rf4D49y/120.jpg" alt="Developers" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Designers and Creatives</h2>
              <p>
                {" "}
                Discover design trends, tools, and best practices. Engage in
                discussions on user experience, interface design, and
                collaborate with developers and professionals from diverse
                backgrounds
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/5s3XPX5/getty-473508362-282911.jpg"
                alt="Developers"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                Freelancers and Gig Workers
              </h2>
              <p>
                {" "}
                Find tips on freelancing, remote work, and managing an
                independent career. Connect with potential clients or
                collaborators and stay updated on industry demands for
                freelancers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
