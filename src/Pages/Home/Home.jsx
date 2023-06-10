import React from "react";

function Home() {
  return (
    <div className="px-16">
      <div className="flex justify-between mt-8">
        <div>
          <form>
            <div className="flex space-x-2">
              <input
                className="border- border-2 p-1 w-72"
                type="text"
                placeholder="Search "
              />
              <button className="bg-pink-900 py-1 px-2 text-white rounded-lg">Search</button>
            </div>
          </form>
        </div>
        <div className="flex space-x-7">
          <button className="bg-red-950 py-1 px-2 text-white rounded-lg ">Add User</button>
          <button className="bg-red-950 py-1 px-2 text-white rounded-lg">Export to csv</button>

        </div>
      </div>
    </div>
  );
}

export default Home;
