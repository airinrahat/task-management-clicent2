/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyTask = () => {
  const { user } = useContext(AuthContext);

  const [allTask, setAllTask] = useState([]);

  const url = `https://task-management-paltform-server.vercel.app/getMyTask?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllTask(data));
  }, [url]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10">
        <h2 className="text-center text-3xl font-bold my-5">
          Total Task On This Marketplace {allTask.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-2xl font-bold text-zinc-600">
                <th>SL</th>
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th> Deadline</th>
                <th>Priority </th>
              </tr>
            </thead>
            <tbody>
              {allTask.map((task, index) => (
                <tr key={task._id}>
                  <td>{index + 1}</td>
                  <td className="text-xl">{user?.displayName}</td>
                  <td className="text-xl">
                    {task?.title}
                    <br />
                  </td>
                  <td>{task?.description}</td>
                  <td>{task?.time}</td>
                  <td>{task?.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
