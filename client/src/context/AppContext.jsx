import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  // ✅ Fetch all jobs on mount
  useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  // ✅ Add job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });
    const savedJob = await res.json();
    setApplications(prev => [...prev, savedJob]);
  };

  // ✅ Update status
  const updateJobStatus = async (id, newStatus) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    const updatedJob = await res.json();
    setApplications(prev =>
      prev.map(job => (job._id === id ? updatedJob : job))
    );
  };

  // ✅ Delete job
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    setApplications(prev => prev.filter(job => job._id !== id));
  };

  // ✅ Filter logic
  const filteredJobs =
    filterStatus === "All"
      ? applications
      : applications.filter(job => job.status === filterStatus);

  return (
    <AppContext.Provider
      value={{
        applications,
        filteredJobs,
        filterStatus,
        setFilterStatus,
        addJob,
        updateJobStatus,
        deleteJob,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
