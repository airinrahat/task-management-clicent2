/* eslint-disable no-unused-vars */
import React from "react";

const Updatetest = () => {
  return (
    <div>
      {" "}
      <div className="rounded-lg border-2 shadow-2xl shadow-[#00bcc2] glass py-5 px-10 mt-14">
        <form>
          <div className="grid grid-cols-2 gap-6 mt-4 ">
            <div className="col-span-3 md:col-span-1">
              <label className="text-black text-base md:text-lg font-bold ">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                className="block w-full px-4 py-2 mt-2 text-black bg-transparent border rounded-md outline outline-[#00bcc2]      dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <label className="text-black text-base md:text-lg font-bold ">
                Deadline
              </label>
              <input
                type="date"
                className="block w-full outline outline-[#00bcc2] px-4 py-2 mt-2 text-black bg-transparent border   rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* <div className=" col-span-2 md:col-span-1">
              <label className="text-gray-100 text-base md:text-lg font-medium ">
                Deadline
              </label>
              <input
                type="date"
                className="block w-full min-h-10 px-4 py-2 mt-2 text-gray-100 bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div> */}
          </div>
          <div className=" flex justify-between items-end gap-5">
            <div className=" mt-6 flex-1">
              <label className="text-black text-base md:text-lg font-medium ">
                Post Description
              </label>
              <textarea
                type="text"
                placeholder="description"
                className="block w-full h-16 px-4 py-2 mt-2 text-black bg-transparent border outline outline-[#00bcc2]  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex justify-end mt-6">
              <label className="">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-block text-white bg-[#00bcc2]"
                />
              </label>
              {/* <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-[#00bcc2] text-xl transition-colors duration-300 transform h-16 bg-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Add
              </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updatetest;
