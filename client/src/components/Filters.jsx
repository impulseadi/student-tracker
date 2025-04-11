import React from "react";
import { useAppContext } from "../context/AppContext";

const Filters = () => {
  const { filterStatus, setFilterStatus } = useAppContext();

  const handleChange = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-6 bg-gradient-to-r from-pink-100 to-pink-200">
      <label className="font-bold text-3xl mr-2">Filter by Status:</label>
      <select
        value={filterStatus}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default Filters;
