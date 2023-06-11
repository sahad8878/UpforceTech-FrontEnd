import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import profile from "../../Assets/user.png";
import { addUserData } from "../../Utils/Api";

function AddUserForm() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [errors, setErrors] = useState({});
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const validateFields = (data) => {
    let errors = {};

    // Validate fName
    if (!data.fName) {
      errors.fName = "First name is required";
    }

    // Validate lName
    if (!data.lName) {
      errors.lName = "Last name is required";
    }

    // Validate email
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    // Validate number
    if (!data.number) {
      errors.number = "Phone number is required";
    } else if (data.number.length < 10) {
      errors.number = "Phone number is invalid";
    }
    // Validate gender
    if (!data.gender) {
      errors.gender = "Gender is required";
    }
    // Validate status
    if (!data.status) {
      errors.status = "status is required";
    }

    // location licenceImg
    if (!data.file || !data.file.name) {
      errors.profile = "profile is required";
    }

    // location location
    if (!data.location) {
      errors.location = "Location is required";
    }

    setErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };
  const handleAddUser = async (event) => {
    event.preventDefault();

    let data = new FormData(event.currentTarget);

    data = {
      fName: data.get("fName"),
      lName: data.get("lName"),
      email: data.get("email"),
      number: data.get("number"),
      gender: data.get("gender"),
      status: data.get("status"),
      location: data.get("location"),
      file: data.get("file"),
    };
    const formData = new FormData();

    // Append other form fields to the formData object
    formData.append("fName", data.fName);
    formData.append("lName", data.lName);
    formData.append("email", data.email);
    formData.append("number", data.number);
    formData.append("gender", data.gender);
    formData.append("status", data.status);
    formData.append("location", data.location);
    formData.append("file", data.file);

    if (validateFields(data)) {
      const addedUser = await addUserData(formData);
      if (addedUser.success) {
        message.success(addedUser.message);
        navigate("/");
      } else {
        message.error(addedUser.message);
      }
    }
  };
  return (
    <div className="px-10 md:px-16 lg:px-24 mb-9">
      <h1 className="text-4xl text-center mt-3 mb-5 font-semibold">
        Register Your Details
      </h1>
      <div className="shadow-2xl p-5 ring-[.5px] ring-slate-400">
        <div className="flex justify-center items-center m-3">
          <img src={profile} className="h-20" alt="profile" />
        </div>
        <form onSubmit={handleAddUser} className="">
          <div className="space-y-5">
            <div className=" flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-10 font-medium ">
              <div className="flex flex-col sm:w-[50%] space-y-2 ">
                <label htmlFor="fName">First Name</label>
                <input
                  type="text"
                  id="lName"
                  name="fName"
                  placeholder="Enter FirstName"
                  className="border border-slate-300 p-2 rounded-lg"
                />
                {errors.fName && (
                  <span className="text-red-600">{errors.fName}</span>
                )}
              </div>
              <div className="flex flex-col sm:w-[50%] space-y-2">
                <label htmlFor="lName">Last Name</label>

                <input
                  type="text"
                  id="lName"
                  name="lName"
                  placeholder="Enter LastName"
                  className="border border-slate-300 p-2 rounded-lg"
                />
                {errors.lName && (
                  <span className="text-red-600">{errors.lName}</span>
                )}
              </div>
            </div>
            <div className=" flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-10 font-medium  ">
              <div className="flex flex-col sm:w-[50%] space-y-2 ">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="border border-slate-300 p-2 rounded-lg"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col sm:w-[50%] space-y-2">
                <label htmlFor="number">Mobile</label>

                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Enter Address"
                  className="border border-slate-300 p-2 rounded-lg"
                />
                {errors.number && (
                  <span className="text-red-600">{errors.number}</span>
                )}
              </div>
            </div>

            <div className=" flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-10 font-medium  ">
              <div className="flex flex-col sm:w-[50%] space-y-2 ">
                <label htmlFor="email">Select Your Gender</label>
                <div className="space-x-2">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={selectedOption === "male"}
                    onChange={handleOptionChange}
                    className="border border-slate-300 p-2 rounded-lg"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="space-x-2">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={selectedOption === "female"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                {errors.gender && (
                  <span className="text-red-600">{errors.gender}</span>
                )}
              </div>
              <div className="flex flex-col sm:w-[50%] space-y-2">
                <label htmlFor="status">Select Your Status</label>
                <select
                  name="status"
                  id="status"
                  placeholder="Select"
                  className="border border-slate-300 p-2 rounded-lg"
                >
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </select>
                {errors.status && (
                  <span className="text-red-600">{errors.status}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-10 font-medium  ">
              <div className="flex flex-col sm:w-[50%] space-y-2 ">
                <label htmlFor="profile">Select Your Profile</label>
                <input
                  type="file"
                  id="profile"
                  name="file"
                  className="border p-1 border-slate-300 rounded-lg "
                />
                {errors.profile && (
                  <span className="text-red-600">{errors.profile}</span>
                )}
              </div>
              <div className="flex flex-col sm:w-[50%] space-y-2">
                <label htmlFor="location">Enter Your Location</label>

                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter Your Location"
                  className="border  border-slate-300 p-2 rounded-lg"
                />
                {errors.location && (
                  <span className="text-red-500">{errors.location}</span>
                )}
              </div>
            </div>
            <button className=" w-full bg-pink-900 p-1 cursor-pointer hover:opacity-90 rounded-lg text-white  text-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserForm;
