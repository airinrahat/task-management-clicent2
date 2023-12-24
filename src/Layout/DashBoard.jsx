/* eslint-disable no-unused-vars */
import React from "react";
import { FaHome, FaTasks, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="mx-auto max-w-screen-xl  flex justify-between">
      <div className="  min-h-screen  px-2  mr-6  bg-[#30373E]">
        <ul className="menu mt-7 bg-inherit text-xl text-[#999999]">
          <>
            <li>
              <NavLink className="mt-3" to="/dashboard/profile">
                <FaUser />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink className="my-3" to="/dashboard/addtask">
                <FaTasks />
                Add Task
              </NavLink>
            </li>

            <li>
              <NavLink className="my-3" to="/dashboard/todoTask">
                <FaUser />
                To-Do Task
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/ongoing">
                <FaUser />
                Ongoing Task
              </NavLink>
            </li>
            <li>
              <NavLink className="my-3" to="/dashboard/previous">
                <FaUser />
                Previous Task{" "}
              </NavLink>
            </li>
          </>

          <div className="divider my-5 p-0 bg-gray-300 h-1 rounded"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="my-3" to="/mytask">
              <FaUsers></FaUsers>My Task
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
