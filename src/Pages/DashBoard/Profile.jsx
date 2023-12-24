/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import {
  FaAddressBook,
  FaCalendarWeek,
  FaCity,
  FaClinicMedical,
  FaGoogleDrive,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaWonSign,
} from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="avatar">
            <div className="w-16 rounded-full ">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h2>
            <b className="text-4xl">{user?.displayName}</b>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaGoogleDrive style={{ fontSize: "50px" }}></FaGoogleDrive>
              </div>
              <div>
                <h3>
                  <b>EMAIL ADDRESS</b>
                </h3>
                <p className="text-gray-500"> {user?.email}</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaMapMarkerAlt style={{ fontSize: "50px" }}></FaMapMarkerAlt>
              </div>
              <div>
                <h3>
                  <b>ADDRESS</b>
                </h3>
                <p className="text-gray-500">Kishoregonj, Dhaka-1214</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaAddressBook style={{ fontSize: "50px" }}></FaAddressBook>
              </div>
              <div>
                <h3>
                  <b>POST CODE</b>
                </h3>
                <p className="text-gray-500">1214</p>
              </div>
            </div>
          </div>
          <div className=" bg-white p-3  rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaCity style={{ fontSize: "50px" }}></FaCity>
              </div>
              <div>
                <h3>
                  <b>CITY</b>
                </h3>
                <p className="text-gray-500">Dhaka</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaClinicMedical style={{ fontSize: "50px" }}></FaClinicMedical>
              </div>
              <div>
                <h3>
                  <b>COUNTRY OF RESIDENCE</b>
                </h3>
                <p className="text-gray-500">Bangladesh</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3  rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaCalendarWeek style={{ fontSize: "50px" }}></FaCalendarWeek>
              </div>
              <div>
                <h3>
                  <b>JOINED SINCE</b>
                </h3>
                <p className="text-gray-500">{user?.metadata.creationTime}</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3  rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaWonSign style={{ fontSize: "50px" }}></FaWonSign>
              </div>
              <div>
                <h3>
                  <b>WEB SITE</b>
                </h3>
                <p className="text-gray-500">http://example.com</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaUserGraduate style={{ fontSize: "50px" }}></FaUserGraduate>
              </div>
              <div>
                <h3>
                  <b>TYPE</b>
                </h3>
                <p className="text-gray-500">Personal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
