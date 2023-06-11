import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DropDown from "../Dropdown/Dropdown.jsx";
import {
  baseUrl,
  deleteUserData,
  updateStatusActive,
  updateStatusInActive,
} from "../../Utils/Api.js";
import { message, Modal } from "antd";

function TableRow({ client, index, refresh, setRefresh }) {
  const [dropdown, setDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  function handleDelete(id) {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        const deleted = await deleteUserData(id);

        if (deleted.success) {
          message.success(deleted.message);
          setRefresh(!refresh);
        } else {
          message.error(deleted.message);
        }
      },
      onCancel() {},
    });
  }
  function handleActiveStatus(id) {
    Modal.confirm({
      title: "Are you sure you want to active user status?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        const activeUser = await updateStatusActive(id);

        if (activeUser.success) {
          message.success(activeUser.message);
          setRefresh(!refresh);
        } else {
          message.error(activeUser.message);
        }
      },
      onCancel() {},
    });
  }

  function handleInactiveStatus(id) {
    Modal.confirm({
      title: "Are you sure you want to Inactive user status?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        const inActiveUser = await updateStatusInActive(id);

        if (inActiveUser.success) {
          message.success(inActiveUser.message);
          setRefresh(!refresh);
        } else {
          message.error(inActiveUser.message);
        }
      },
      onCancel() {},
    });
  }

  return (
    <tr key={client._id} className="">
      <td className=" pb-3 pt-1  px-3 text-base   font-normal text-gray-700 whitespace-nowrap">
        {index + 1}
      </td>
      <td className=" pb-3 pt-1 px-3 text-sm font-medium text-gray-700 whitespace-nowrap">
        {client.fName} {client.lName}
      </td>
      <td className=" pb-3 pt-1 px-3 text-base font-normal text-gray-700 whitespace-nowrap">
        {client.email}
      </td>
      <td className=" pb-3 pt-1 px-3 text-base font-normal text-gray-700 whitespace-nowrap">
        {client.gender}
      </td>

      <td className=" pb-3 pt-1 px-3 text-base font-normal text-gray-700 whitespace-nowrap">
        <div className="">
          <div className="relative">
            <button
              onClick={() => setStatusDropdown(!statusDropdown)}
              className=" p-1 px-2 text-xs font-normal uppercase tracking-wider text-gray-100 bg-pink-900 rounded-lg bg-opacity-95 cursor-pointer hover:bg-opacity-75"
            >
              {client.status}{" "}
              <KeyboardArrowDownIcon
                sx={{
                  fontSize: "17px",
                  cursor: "pointer",
                }}
              />
            </button>

            {statusDropdown && <DropDown userId={client._id} handleActiveStatus={handleActiveStatus} handleInactiveStatus={handleInactiveStatus}/>}
          </div>
        </div>
      </td>
      <td className=" pb-3 pt-1 px-3 text-base flex justify-center items-center text-gray-700 ">
        <div className="h-10 w-10 ">
          <img
            className="h-8 w-8 rounded-full mt-2"
            src={`${baseUrl}/uploads/${client?.profile}`}
            alt="client"
          />
        </div>
      </td>
      <td className=" px-3 font-normal text-base text-gray-700 whitespace-nowrap">
        <div className="">
          <div className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className=" inline-flex items-c   justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              {/* vertical */}
              <svg
                class="w-3 h-3 hidden md:block "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
              <svg
                class="w-3 h-3 block md:hidden"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>

            {dropdown && (
              <DropDown
                dropdown={dropdown}
                userId={client._id}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
