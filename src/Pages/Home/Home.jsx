import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../../Components/Table/Table";
import AddIcon from "@mui/icons-material/Add";
import { fechUserData } from "../../Utils/Api";
import { CSVLink } from "react-csv";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fechData = async () => {
      const userData = await fechUserData(currentPage, search);
      setUsers(userData.users);
      setTotalPages(userData.totalPages);
      setCurrentPage(userData.currentPage);
    };
    fechData();
  }, [currentPage, search, refresh]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const headers = [
    { label: "Id", key: "_id" },
    { label: "FullName", key: "fName" },
    { label: "Email", key: "email" },
    { label: "Number", key: "number" },
    { label: "Gender", key: "gender" },
    { label: "Status", key: "status" },
  ];

  const transformData = (data, headers) => {
    return [
      headers.map((header) => header.label),
      ...data.map((row) => headers.map((header) => row[header.key])),
    ];
  };
  return (
    <div className="px-5 md:px-16 lg:px-24 mb-9">
      <div className="flex  flex-col sm:flex-row justify-center sm:justify-between mt-8">
        <div className="flex justify-center">
          <form>
            <div className="flex space-x-2">
              <input
                className="border- border-2 p-1 sm:w-72"
                type="text"
                placeholder="Search "
                name="search"
                value={search}
                onChange={handleSearchChange}
              />
              <button className="bg-pink-900 py-1 px-2 text-white rounded-lg">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex space-x-3 mt-5 sm:mt-0  justify-center">
          <Link to="/add-user">
            <button className="bg-pink-900 py-1 px-2 text-white rounded-lg hover:opacity-90 ">
              <AddIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />{" "}
              Add User
            </button>
          </Link>
          {users.length !== 0 && (
            <CSVLink
              className="bg-pink-900 py-1 px-2 text-white rounded-lg"
              data={users}
              headers={headers}
              filename={"users.csv"}
              transformer={transformData}
            >
              Export to csv
            </CSVLink>
          )}
        </div>
      </div>
      <div className="sm:mt-20 mt-7 sm:px-7">
        {users.length !== 0 ? (
          <Table
            users={users}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            totalPages={totalPages}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ) : (
          <div className="flex justify-center items-center font-semibold text-xl text-red-400 mt-16">
            {" "}
            User data Not exist
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
