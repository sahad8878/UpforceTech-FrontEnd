import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { viewUserDetails, baseUrl } from "../../Utils/Api";
import { message } from "antd";

const ViewUserDetails = () => {
  const { userId } = useParams();

  const [user, setUser] = useState([]);

  
  useEffect(() => {
    const fechUserDetails = async () => {
      const userData = await viewUserDetails(userId);
      if (userData.success) {
        setUser(userData.user);
      } else {
        message.error(userData.message);
      }
    };
    fechUserDetails();
  }, [userId]);

  return (
    <div className="px-10 md:px-16 lg:px-24 mb-9">
      <h1 className="text-4xl text-center mt-3 mb-5 font-semibold">
        View User Details
      </h1>
      <div className="shadow-2xl p-5 ">
        <div className="    pb-10  ">
          <div className="container mx-auto my-9 flex justify-center  ">
            <div className="flex flex-col md:flex-row">
              {/*  */}
              <div className="w-full  flex justify-center md:justify-end">
                <div className="shadow-2xl bg-slate-100  ">
                  <div class="flex flex-col items-center p-5 pb-5">
                    <img
                      class="w-52 h-52 mb-3 rounded-full shadow-lg"
                      src={`${baseUrl}/uploads/${user?.profile}`}
                      alt="Bonnie "
                    />

                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {user.fName} {user.lName}
                    </h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className=" py-8 md:py-0 px-4">
                <div className=" shadow-2xl bg-slate-100 pb-10 p-5 sm:p-10 ">
                  <div className="mb-4 flex justify-center items-center  ">
                    <span className="block pr-6 text-gray-700  font-medium mb-2  text-center">
                      Phone
                    </span>
                    <div className="bg-white bg-opacity-60 p-2  text-center sm:text-start w-full">
                      {user.number}
                    </div>
                  </div>
                  <div className="mb-4 flex ">
                    <span className="block text-gray-700 text-center sm:text-start font-medium mb-2 pr-5">
                      gender
                    </span>
                    <div className="bg-white bg-opacity-60 text-center sm:text-start p-2 w-full">
                      {user.gender}
                    </div>
                  </div>
                  <div className="mb-4 flex ">
                    <span className="block text-gray-700  text-center sm:text-start font-medium mb-2 pr-7">
                      status
                    </span>
                    <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
                      {user.status}
                    </div>
                  </div>
                  <div className="mb-4 flex bg-opacity-60  ">
                    <span className="block text-center sm:text-start text-gray-700  font-medium mb-2 pr-4">
                      location
                    </span>
                    <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
                      {user.location}
                    </div>
                  </div>

                  <div className=" flex justify-center mt-5">
                    <Link to={`/edit-user/${user._id}`}>
                      <button className=" bg-pink-900 rounded-lg text-white px-3 py-1 text-center hover:bg-opacity-75">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserDetails;
