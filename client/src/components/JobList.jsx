import React from "react";
import { useAppContext } from "../context/AppContext";

const JobList = () => {
  const { filteredJobs, updateJobStatus, deleteJob } = useAppContext();

  return (
    
    <div className="space-y-4 bg-gradient-to-r from-green-200 to-blue-300">
        <div className="font-bold text-3xl ml-2">Job Applications</div>
      {filteredJobs.length === 0 ? (
        <p className="text-gray-500 text-center  ">No job applications found.</p>
      ) : (
        filteredJobs.map((job) => (
          <div
            key={job._id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white bg-gradient-to-r from-blue-100 to-pink-100"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <p className="text-sm text-gray-600">{job.role}</p>
                <link rel="stylesheet" href={job.link} />
                {/* ✅ Job application link */}
                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm underline mt-1 block"
                  >
                    View Application
                  </a>
                )}
              </div>
              <div className="flex gap-2 items-center">
                {/* ✅ Status dropdown uses _id */}
                <select
                  value={job.status}
                  onChange={(e) => updateJobStatus(job._id, e.target.value)}
                  className="border rounded px-2 py-1 text-sm cursor-pointer"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
                {/* ✅ Delete uses _id */}
                <button
                  onClick={() => deleteJob(job._id)}
                  className="text-red-600 text-sm font-semibold hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;
