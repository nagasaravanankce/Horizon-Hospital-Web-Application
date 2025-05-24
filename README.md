

# 🩺 Doctor Management System

A simple full-stack web application to manage doctor records efficiently — including adding, viewing, updating, and deleting doctor details.

## 📌 Problem Statement

In hospitals and clinics, managing doctor information manually can lead to errors and inefficiencies. This application provides an intuitive interface and secure backend to streamline doctor data management.

## 🚀 Technologies Used

* **Frontend:** ReactJS
* **Backend:** Node.js + Express
* **Database:** MongoDB
* **Other Tools:** Axios, bcryptjs, React Router, CORS

## 📁 Features

* ✅ Add new doctors with relevant information
* 📄 View all doctor details in a tabular format
* ✏️ Update existing doctor details
* ❌ Delete doctor records securely
* 🔒 Passwords are securely hashed using bcrypt

## 📷 Screenshots

*(Add screenshots here if needed)*

## 📦 Folder Structure

```
/client            -> React frontend
/server            -> Express backend
  └── routes       -> API routes
  └── models       -> MongoDB schemas
  └── config       -> DB config
```

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/doctor-management-system.git
cd doctor-management-system
```

### 2. Set up the backend

```bash
cd server
npm install
# Add .env with your MongoDB URI
npm start
```

### 3. Set up the frontend

```bash
cd client
npm install
npm start
```

### 4. Environment Variables (Backend - `.env`)

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## ✍️ Author
N. Nagasaravanan


This project is licensed under the MIT License.

---

Let me know if you'd like the README customized further — like adding badges, screenshot sections, or deployment info.
