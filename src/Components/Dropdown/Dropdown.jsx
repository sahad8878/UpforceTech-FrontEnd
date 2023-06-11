import React from "react";
import { Link } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

function Dropdown({ dropdown, userId, handleDelete }) {
  return (
    <div
      className={` 
      ${dropdown ? "left-3" : "right-9"} 
     
      absolute sm: right-0 z-50 mt-2 w-28 sm:w-28 text-left origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
    >
      {dropdown ? (
        <div>
          <div
            className="py-"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link to={`/view-userDetails/${userId}`}>
              <span className="block p-1.5 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <VisibilityIcon
                  sx={{
                    fontSize: "17px",
                    cursor: "pointer",
                    color: "green",
                  }}
                />{" "}
                View
              </span>
            </Link>
          </div>
          <div
            className=""
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link to={`/edit-user/${userId}`}>
              <span className="block p-1.5 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <BorderColorIcon
                  sx={{
                    fontSize: "17px",
                    cursor: "pointer",
                    color: "blue",
                  }}
                />{" "}
                Edit
              </span>
            </Link>
          </div>
          <div
            className="cursor-pointer "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <span
              className="block p-1.5 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleDelete(userId)}
            >
              <DeleteIcon
                sx={{
                  fontSize: "17px",
                  cursor: "pointer",
                  color: "red",
                }}
              />{" "}
              Delete
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="py-"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <span className="block p-1.5 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Active
            </span>
          </div>
          <div
            className=""
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <span className="block p-1.5 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Inactive
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
