/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TodoTask = () => {
  const [alltask, setAlltask] = useState([]);
  const [processedTaskIds, setProcessedTaskIds] = useState(new Set());

  const url =
    "https://task-management-paltform-server.vercel.app/taskstatus?status=to-do";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAlltask(data);

        // Check for timeout and call notification and handleDelete functions
        data.forEach(async (task) => {
          const currentTime = new Date().getTime();
          const taskTime = new Date(task.time).getTime();

          if (task.status === "to-do" && taskTime < currentTime) {
            // Call notification function
            await notification(task);

            // Call handleDelete function
            await handleAutoDelete(task._id);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
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
        fetch(
          `https://task-management-paltform-server.vercel.app/tasks/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "This Task has been deleted.", "success");
            }
            const remaining = alltask.filter((task) => task._id !== _id);
            setAlltask(remaining);
          });
      }
    });
  };

  const notification = (e) => {
    const addnotification = {
      name: e.name,
      email: e.email,
      status: e.status,
      time: e.time,
      title: e.title,
      priority: e.priority,
      description: e.description,
      timeout: "Timeout",
    };

    const taskId = e._id;

    // Check if the task ID has already been processed
    if (processedTaskIds.has(taskId)) {
      return;
    }

    // Add the task ID to the processed set
    setProcessedTaskIds((prevSet) => new Set(prevSet.add(taskId)));

    fetch("https://task-management-paltform-server.vercel.app/notification", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addnotification),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "notification added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Error posting notification:", error);
        // Handle the error as needed
      });
  };

  const handleAutoDelete = (_id) => {
    console.log(_id);
    fetch(`https://task-management-paltform-server.vercel.app/tasks/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "This Task has been deleted.", "success");
        }
        const remaining = alltask.filter((task) => task._id !== _id);
        setAlltask(remaining);
      });
  };

  const statusChange = (task) => {
    fetch(
      `https://task-management-paltform-server.vercel.app/tasks/ongoingstatus/${task._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: `${task.title} This Task Ongoing!`,
          });
        }
        const remaining = alltask.filter((tasks) => tasks._id !== task._id);
        setAlltask(remaining);
      });
  };

  return (
    <div>
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
                <td> {index + 1}</td>
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
                    className="btn btn-sm bg-red-500 text-black"
                  >
                    Delete
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => statusChange(myTask)}
                    className="btn btn-sm bg-orange-400 text-black"
                  >
                    {myTask.status ? myTask.status : "New"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoTask;
