/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("addTask", data);

    //send data to server

    const { name, email, time, priority, title, description } = data;

    const addtask = {
      name,
      email,
      time,
      title,
      priority,
      description,
      status: "to-do",
    };

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addtask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "task added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="">
        <div className="max-w-screen-xl mx-auto  mt-5 px-10 lg:px-0">
          <h2 className="text-center text-4xl">Add Task</h2>
          <p className="text-center text-xl my-3">
            It is a long established fact that a reader will be distraceted by
            the
            <br></br>
            readable content of a page when looking at its layout. The point of
            using Lorem
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            {/* form name and email row */}
            <div className="md:flex gap-5 mb-5">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text text-2xl font-bold text-zinc-600">
                    Name
                  </span>
                </label>
                <label className=" input input-bordered w-full outline outline-[#00bcc2]">
                  <input
                    type="name"
                    name="name"
                    {...register("name")}
                    defaultValue={user?.displayName}
                    placeholder="name"
                    className="w-full"
                  />
                </label>
              </div>

              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text text-2xl font-bold text-zinc-600">
                    Email
                  </span>
                </label>
                <label className="input-group input input-bordered w-full outline outline-[#00bcc2]">
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    defaultValue={user?.email}
                    placeholder="Email"
                    className="w-full"
                  />
                </label>
              </div>
            </div>

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
                    {...register("time")}
                    required
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
                  <select {...register("priority")} required>
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
                    {...register("title")}
                    placeholder="Title"
                    required
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
                    placeholder=" description"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="md:flex mb-5">
              <div className="form-control md:w-full ml-4">
                <label className="">
                  <input
                    type="submit"
                    value="Add Task"
                    className="btn btn-block text-white bg-[#00bcc2]"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
