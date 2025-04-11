import React, { useState } from "react";
import { useAppContext } from "../context/AppContext.jsx";

const JobForm = () => {
  const { addJob } = useAppContext();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.company || !formData.role || !formData.appliedDate) return;

    try {
      await addJob(formData); // ✅ Connects to backend POST /api/jobs
      setFormData({
        company: "",
        role: "",
        status: "Applied",
        appliedDate: "",
        link: ""
      });
    } catch (error) {
      console.error("Failed to add job:", error);
    }
  };

  return (
    <form
      className="bg-white p-6 mt-5 rounded-lg shadow-md bg-gradient-to-r from-blue-200 to-pink-300 mb-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold mb-4">Add New Job Application</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={formData.role}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <input
          type="date"
          name="appliedDate"
          value={formData.appliedDate}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="url"
          name="link"
          placeholder="Application Link"
          value={formData.link}
          onChange={handleChange}
          className="border p-2 rounded col-span-1 md:col-span-2"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded cursor-pointer"
      >
        Add Application
      </button>
    </form>
  );
};

export default JobForm;
