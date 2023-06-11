import React from "react";
import Pagination from "@mui/material/Pagination";
import TableRow from "../TableRow/TableRow";
import './Table.css'
function Table({users,handlePageChange,currentPage,totalPages,refresh,setRefresh}) {

  return (
    <div className="overflow-auto rounded-lg shadow-xl">
      <table className="w-full border-b">
        <thead className="bg-black border-b-2 text-center  border-gray-200 text-white">
          <tr className="space-x-5">
            <th className="">ID</th>
            <th className="p-3 text-sm font-medium   text-center">FullName</th>
            <th className="p-3 text-sm font-semibold  text-center">
              Email
            </th>
            <th className="p-3 text-sm font-semibold  text-center">
              Gender
            </th>
            <th className="p-3 text-sm font-semibold  text-center">
              Status
            </th>
            <th className="p-3 text-sm font-semibold  text-center">
              Profile
            </th>
            <th className="p-3 text-sm font-semibold  text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className=" bg-white divide-y text-center divide-gray-200">
          {users.map((client,index) => (
            <TableRow client={client} index={index} refresh={refresh} setRefresh={setRefresh}/>
          ))}
        </tbody>
      </table>
      {totalPages !== 1 && (
        <div className="flex justify-end px-6 py-4">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="secondary"
            />
    </div>
            )}
    </div>
  );
}

export default Table;
