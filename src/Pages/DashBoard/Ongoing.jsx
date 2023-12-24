/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Ongoing = () => {
  const [alltask, setAlltask] = useState([]);

  const url = "http://localhost:5000/taskstatus?status=ongoing";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAlltask(data));
  }, [url]);

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "This Toy has been deleted.", "success");
            }
            const remaining = alltask.filter((task) => task._id !== _id);
            setAlltask(remaining);
          });
      }
    });
  };

  const statusChange = (task) => {
    fetch(`http://localhost:5000/tasks/completedstatus/${task._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: `${task.title} This Task Completed!`,
          });
        }
        const remaining = alltask.filter((tasks) => tasks._id !== task._id);
        setAlltask(remaining);
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="text-2xl font-bold text-black">
          <tr>
            <th>Sl</th>
            <th>Title</th>
            <th>Deadline </th>
            <th> Priority </th>
            <th> Edit</th>
            <th> Delete</th>
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
                <Link to={`/dashboard/updatetodotask/${myTask._id}`}>
                  <button className="btn btn-sm bg-[#00bcc2] text-black">
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(myTask._id)}
                  className="btn btn-sm bg-[#00bcc2] text-black"
                >
                  Delete
                </button>
              </td>

              <td>
                <Link>
                  <button
                    onClick={() => statusChange(myTask)}
                    className="btn btn-sm bg-[#00bcc2] text-black"
                  >
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

export default Ongoing;
