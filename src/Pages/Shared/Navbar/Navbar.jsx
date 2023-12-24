/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { IoNotificationsSharp } from "react-icons/io5";
import Notification from "./Notification";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [allNotificationTask, setAllNotificationTask] = useState([]);
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
    navigate(from, { replace: true });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="lg:mx-2">
        <NavLink to="/mytask">My Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      {/* <li className="lg:mx-2">
        <NavLink to="/myjob">Contact</NavLink>
      </li> */}
      <li>
        <NavLink to="/blog">Blogs</NavLink>
      </li>
    </>
  );

  const url = "https://task-management-paltform-server.vercel.app/notification";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllNotificationTask(data));
  }, [url]);

  return (
    <div>
      <>
        <nav>
          <div className="md:navbar bg-base-100 mx-auto max-w-screen-xl">
            <div className="md:navbar-start py-6">
              <div className="dropdown z-10">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {links}
                </ul>
              </div>
              <Link className="text-[#00bcc2] font-bold text-4xl">
                <span>Task</span>gain
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 py-3 text-xl">
                {links}
              </ul>
            </div>

            <div className="md:navbar-end flex justify-center items-center gap-5 pb-5 md:pb-0">
              <div className="mr-2">
                <div className="flex justify-center gap-3 items-center"></div>
              </div>

              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-center w-[200px]  relative flex justify-end gap-5 lg:text-start"
              >
                <div className="flex-none md:flex">
                  <div className="dropdown  dropdown-bottom  dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost mr-4">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                        <span className="badge py-3 px-2 badge-primary indicator-item">
                          {/* {upcomingdata.length} */}
                          {allNotificationTask ? (
                            allNotificationTask.length
                          ) : (
                            <span>0</span>
                          )}
                        </span>
                      </div>
                    </label>

                    <div
                      tabIndex={0}
                      className="dropdown-content z-[110] mt-5  w-64"
                    >
                      <ul className=" px-5 py-5 h-96 z-[110] overflow-auto overflow-x-hidden shadow bg-base-100 border border-[#00bcc2] rounded-box w-60 ">
                        {allNotificationTask.length ? (
                          allNotificationTask.map((notification) => (
                            <Notification
                              key={notification._id}
                              notification={notification}
                            ></Notification>
                          ))
                        ) : (
                          <li className="mb-1">
                            <h4 className="">
                              <IoNotificationsSharp className="text-2xl text-[#00bcc2]" />{" "}
                              <span className="font-bold text-sm">
                                Sorry, there is no data
                              </span>
                            </h4>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {user ? (
                  <div>
                    <img
                      className="rounded-full h-12 w-12 "
                      src={user.photoURL}
                      alt="User Profile"
                    />
                    {isHovered && (
                      <p className="font-semibold text-xl  absolute left-20  bottom-0 top-12 w-full text-center">
                        {user.displayName}
                      </p>
                    )}
                  </div>
                ) : (
                  <img
                    className="rounded-full h-12 w-12"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHTAJPlLEQwOQG_g-WNP0WayMmnpM-Nq9ZA&usqp=CAU"
                  />
                )}
              </div>

              <div className="text-center lg:text-start">
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className='text-lg font-bold bg-[#00bcc2] text-white py-1.5 px-6 rounded-md"'
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button
                      className='text-lg font-bold bg-[#00bcc2] text-white py-1.5 px-6 rounded-md"'
                      // variant="secondary"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </div>

              {/* <Link to="/login">
                <button className="text-xl bg-[#00bcc2] text-white py-2 px-5 rounded-md">
                  Login
                </button>
              </Link> */}
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
