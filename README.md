# 🐞 FealtyX - Bug/Task Tracker App

A feature-rich bug/task tracking system built using **React.js (Vite)**, **Redux Toolkit**, and **Tailwind CSS**.  
This project is designed to simulate a real-world task/bug tracking workflow with **role-based dashboards** for Developers and Managers.

---

## 🚀 Features

### 🔐 Authentication
- Mock login system with hardcoded credentials.
- Role-based redirection:
  - `Developer` → `/developer` dashboard.
  - `Manager` → `/manager` dashboard.

### 🗂️ Task Management
- Managers can:
  - Assign tasks to developers.
  - View open, completed, and pending-approval tasks.
  - Approve or reopen completed tasks.

- Developers can:
  - View tasks assigned to them.
  - Mark tasks as completed (moves them to pending-approval).
  - Track time spent per task.

### ⏱️ Time Tracking
- Developers can log time on each task.
- Managers can view total time spent by each developer per task.

### 📊 Dashboard View
- Manager and developer dashboards show role-specific task views.
- Clean, responsive UI using Tailwind CSS.

---

## 🔧 Tech Stack

| Tool        | Purpose                       |
|-------------|-------------------------------|
| React (Vite) | Frontend Framework             |
| Redux Toolkit | State Management             |
| Tailwind CSS | Styling                       |
| React Router | Routing between pages         |
| JavaScript   | Application logic             |

---

## 🧪 Mock Credentials

| Role     | Username   | Password |
|----------|------------|----------|
| Manager  | `manager1` | `1234`   |
| Developer| `dev1`     | `1234`   |

> You can modify these credentials in `Login.jsx` or the `authSlice`.

---

## 📁 Folder Structure

