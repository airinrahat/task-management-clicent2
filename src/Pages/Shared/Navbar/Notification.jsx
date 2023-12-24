/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { AuthContext } from "../../../Providers/AuthProvider";

const Notification = ({ notification }) => {
  const { user, logOut } = useContext(AuthContext);

  const {
    _id,
    name,
    email,
    status,
    time,
    title,
    priority,
    description,
    update,
    timeout,
  } = notification;

  const goAllDataPage = (task) => {
    console.log("it's work", _id);
  };

  return (
    <li
      className="mb-3 p-2 rounded border border-gray-600"
      onClick={goAllDataPage}
    >
      <h4 className="flex items-center gap-2">
        <IoNotificationsSharp className="text-2xl text-[#00bcc2]" />{" "}
        <span className="font-medium text-sm">{title}</span>
      </h4>
      <p className="ml-8">{update ? <b>Task Updated</b> : <b>{timeout}</b>}</p>
      <p className="ml-8 text-xs mb-2">{time ? time : "notime"}</p>
    </li>
  );
};

export default Notification;
