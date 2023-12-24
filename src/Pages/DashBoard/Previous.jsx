/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Previous = () => {
  const [alltask, setAlltask] = useState([]);

  const url = "http://localhost:5000/taskstatus?status=completed";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAlltask(data));
  }, [url]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="text-2xl font-bold text-black">
          <tr>
            <th>Sl</th>
            <th>Title</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {alltask.map((myTask, index) => (
            <tr key={myTask._id}>
              <th> {index + 1}</th>
              <td>{myTask?.title}</td>
              <td>{myTask?.time}</td>
              <td>{myTask?.priority}</td>

              <td>
                <Link>
                  <button className="btn btn-sm bg-[#00bcc2] text-black">
                    {myTask.status ? myTask.status : "New"}
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Previous;
