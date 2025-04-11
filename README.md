# 🎯 Student Job Tracker

A fullstack MERN web application that allows students to efficiently track their job applications across different statuses. Built with React, Express.js, MongoDB, and Node.js. Deployed with Vercel and Render.

## 🌐 Live Demo

Frontend: [https://student-tracker.vercel.app](https://student-tracker.vercel.app)  
Backend: [https://student-tracker-api.onrender.com](https://student-tracker-api.onrender.com)

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
Setup Frontend


Copy
cd client
npm install
npm run dev
Setup Backend

bash
Copy
Edit
cd ../server
npm install
npm run dev

## 🧰 Tech Stack
Variable	Description
MONGODB_URI	MongoDB connection URI
