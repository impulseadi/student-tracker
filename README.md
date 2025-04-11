# 🎯 Student Job Tracker

A fullstack MERN web application that allows students to efficiently track their job applications across different statuses. Built with React, Express.js, MongoDB, and Node.js. Deployed with Vercel and Render.

## 🌐 Live Demo

Frontend: [https://student-tracker.vercel.app](https://student-tracker-git-main-impulseadis-projects.vercel.app/)  
Backend: [https://student-tracker-api.onrender.com](https://dashboard.render.com/web/srv-cvs9l46r433s73c1l4mg)

---

## 🚀 Features

- ✅ **Add Job Application**  
  Add a new job with fields: Company, Role, Status, Date of Application, and Link.

- ✅ **List Applications**  
  View all applications in a clean, responsive UI.

- ✅ **Filter by Status**  
  Filter jobs based on current status (Applied, Interview, Offer, Rejected).

- ✅ **Update Status**  
  Modify job application status easily.

- ✅ **Delete Job**  
  Remove job entries from the tracker.

---

## 🧰 Tech Stack

| Tech        | Description                         |
|-------------|-------------------------------------|
| React       | Frontend UI with Hooks & Context API |
| TailwindCSS | Utility-first styling               |
| Node.js     | Backend runtime                     |
| Express.js  | RESTful API server                  |
| MongoDB     | Cloud NoSQL database via Atlas      |
| Vercel      | Frontend deployment                 |
| Render      | Backend deployment                  |

---

## 📁 Folder Structure

```bash
student-job-tracker/
│
├── client/                 # Frontend (React + Tailwind)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── context/        # AppContext for global state
│   │   └── App.jsx
│   └── vite.config.js
│
├── server/                 # Backend (Express + MongoDB)
│   ├── models/             # Mongoose models
│   ├── routes/             # REST API routes
│   └── server.js
│
└── README.md

```
Setup
cd client
npm install
npm run dev

cd ../server
npm install
npm run dev

In.env configure
MONGODB_URI=your_mongodb_uri


📦 Deployment
Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

## 🔗 API Base URL

This project uses a hosted backend API on Render:


If you're forking this repo and deploying your own backend, make sure to update the API base URL in the frontend files (e.g., in `AppContext.js` or wherever fetch calls are made).

You can replace:
```js
fetch("/api/jobs")
fetch("https://your-own-backend.onrender.com/api/jobs")
Thanks.





