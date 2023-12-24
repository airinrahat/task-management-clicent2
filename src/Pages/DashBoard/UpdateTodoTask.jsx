/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateTodoTask = () => {
  const updateTask = useLoaderData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("addTask", data);

    const { time, priority, title, description } = data;
    const update = {
      time,
      title,
      priority,
      description,
      // status: "to-do",
    };

    //send data to server
    fetch(`http://localhost:5000/tasks/${updateTask._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Task updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  const notification = (e) => {
    const addnotification = {
      name: updateTask.name,
      email: updateTask.email,
      status: updateTask.status,
      time: updateTask.time,
      title: updateTask.title,
      priority: updateTask.priority,
      description: updateTask.description,
      update: "update-data",
    };

    fetch("http://localhost:5000/notification", {
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
      });
  };

  return (
    <div>
      {" "}
      <div className="max-w-screen-xl mx-auto  mt-5 px-10 lg:px-0">
        <h2 className="text-center text-4xl">Update Task</h2>
        <p className="text-center text-xl my-3">
          It is a long established fact that a reader will be distraceted by the
          <br></br>
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="my-10">
          {/* form date and  priority */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Time
                </span>
              </label>
              <label className="input-group input input-bordered text-[#999] w-full outline outline-[#00bcc2] ">
                <input
                  type="datetime-local"
                  name="time"
                  defaultValue={updateTask.time}
                  {...register("time")}
                />
              </label>
            </div>

            <div className="form-control w-full  md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Priority
                </span>
              </label>

              <div className="font-normal text-xl border  outline outline-[#00bcc2]  rounded-md border-none   py-3 px-3">
                <select
                  {...register("priority")}
                  defaultValue={updateTask.priority}
                >
                  <option value="">Select-Priority </option>
                  <option value="low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="high">high</option>
                </select>
              </div>
            </div>
          </div>

          {/* form title desprication row */}

          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 w-full">
              <label className="label ]">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Title
                </span>
              </label>
              <label className="input-group input border  w-full outline outline-[#00bcc2] ">
                <input
                  type="text"
                  name="title"
                  defaultValue={updateTask.title}
                  {...register("title")}
                  placeholder="Title"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 w-full">
              <label className="label ]">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Description
                </span>
              </label>
              <label className="input-group input border  w-full outline outline-[#00bcc2] ">
                <input
                  type="text"
                  name="description"
                  {...register("description")}
                  defaultValue={updateTask.description}
                  placeholder=" description"
                />
              </label>
            </div>
          </div>

          {/* button */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-full ml-4">
              <label className="">
                <button
                  onClick={notification}
                  className="w-full text-white bg-[#00bcc2]"
                >
                  <input
                    type="submit"
                    value="Update Task"
                    className="btn text-white bg-[#00bcc2] border-none"
                  />
                </button>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodoTask;
