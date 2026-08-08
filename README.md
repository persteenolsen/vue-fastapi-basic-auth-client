# 🔐 Vue 3 + Pinia HTTP Basic Authentication Client (FastAPI Integration)

A Vue 3 frontend application that communicates with a FastAPI backend using HTTP Basic Authentication. Includes form validation, state management, and a modern Vite development setup.

**Last updated:**
- 08-08-2026

---

## ✨ Features

- Vue 3 frontend framework
- Login and logout
- Silent login possible if valid credentials exists in localStorage
- Pinia state management
- HTTP Basic Authentication integration with FastAPI
- Form validation with VeeValidate + Yup
- Vite development server (fast build tool)
- ESLint for code quality
- Modular and scalable frontend structure

---

## 🛠️ Tech Stack

- Node.js 18.19.1
- Vue 3
- Pinia
- Vite
- VeeValidate
- Yup
- ESLint
- Volta (Node version manager)
- VS Code (development environment)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

- git clone <your-repository-url>

### 2️⃣ Install dependencies

Make sure you have Node.js installed (recommended via Volta or nvm).

- npm install

---

## 💻 Development

Start the local development server:

- npm run dev

The app will be available at:

- http://localhost:3000

---

## 📦 Production Build

Create an optimized production build:

- npm run build

---

## 👀 Preview Production Build

Run a local preview of the production build:

- npm run preview

Available at:

- http://localhost:5050

---

## 🔄 Authentication Flow

- User logs in using username + password
- Credentials are sent using HTTP Basic Authentication
- FastAPI backend validates credentials against database
- Authenticated responses are returned from protected endpoints
- Invalid credentials return 401 Unauthorized

---

## 🏗️ Project Structure

- src/components/ → Vue components
- src/views/ → Page-level views
- src/store/ → Pinia state management
- src/services/ → API communication (FastAPI requests)
- src/router/ → Vue Router configuration
- src/utils/ → Helper functions

---

## 🔗 Backend Dependency

This frontend is designed to work with the following backend:

- FastAPI HTTP Basic Authentication API

Make sure the backend is running at:

- http://127.0.0.1:8000

---

## 📝 Notes

- Ensure CORS is properly configured in FastAPI backend
- Always use HTTPS in production environments
- Store credentials securely (do not persist plain passwords)
- Pinia is used for lightweight global auth state handling

---

## ☁️ Build & Deploy

This project can be deployed using:

- Vercel
- Netlify
- Any static hosting provider

---

Happy coding with Vue 3 🚀