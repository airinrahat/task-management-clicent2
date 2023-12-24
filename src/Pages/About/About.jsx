/* eslint-disable no-unused-vars */
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="hero mb-5 mx-auto max-w-screen-xl  ">
        <div className="flex pb-8 mt-8 gap-10 flex-col  lg:flex-row">
          <div className="lg:w-1/2 md:mb-6 relative">
            <img
              src="https://i.ibb.co/RjynDt4/150962700-project-management-web-banner-or-landing-page-successful.jpg"
              className="w-4/4 rounded-lg shadow-2xl"
            />
            {/* <img
              src="https://i.ibb.co/GtvHzVj/images-q-tbn-ANd9-Gc-SL9-W515-JJjs-Kcfo-JRv-GNs-Md61qm-Z-6z-JRz-P2by-UC-g-Fwm2-AQws-O32-TX9-Tj-Tk-Y.jpg"
              className="w-3/4 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
            /> */}
          </div>
          <div className="lg:w-1/2    space-y-5 px-4">
            <h3 className="text-2xl text-[#00bcc2] font-bold">About Us</h3>
            <h1 className="text-3xl font-bold">
              We Help To Get The Best task And Find A Talent
            </h1>
            <p className="py-3">
              Trello is a visual and intuitive task management platform that
              uses boards, lists, and cards to organize tasks and projects. It
              is known for its simplicity and flexibility.
            </p>
            <p className="flex items-center gap-2">
              <FaCheck className="text-[#00bcc2]"></FaCheck>
              Task creation and organization
            </p>
            <p className="flex items-center gap-2">
              <FaCheck className="text-[#00bcc2]"></FaCheck>
              Due dates, labels, and priorities
            </p>
            <p className="flex items-center gap-2">
              <FaCheck className="text-[#00bcc2]"></FaCheck>
              Project and sub-task management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
