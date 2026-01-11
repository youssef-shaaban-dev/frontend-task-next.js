# Next.js Authentication Task

This project is a frontend authentication task built using **Next.js (App Router)** and **TypeScript**.  
It includes a complete authentication flow with API integration and a protected dashboard.

---

## 🚀 Features

- User Registration
- Account Verification (Verification Code: **123456**)
- User Login
- Token handling using `localStorage`
- Protected Dashboard route
- Responsive design (Desktop & Mobile)
- Clean and scalable project structure

---

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- Axios
- React Hook Form + Zod

---

## 📂 Project Structure

```txt
app/
 ├─ (auth)/
 │   ├─ login/
 │   ├─ register/
 │   ├─ verify/
 ├─ dashboard/
components/
lib/
store/
types/

⚙️ Setup & Installation
1. Clone the repository
git clone https://github.com/your-username/nextjs-task.git

2. Install dependencies
npm install

3. Create a .env.local file
NEXT_PUBLIC_API_URL=YOUR_API_BASE_URL

4. Run the project
npm run dev


The app will be available at:

http://localhost:3000

🔐 Authentication Flow

Register with user details

Verify account using the code: 123456

Login with email and password

Upon successful login, a token is saved in localStorage

User is redirected to a protected Dashboard page

🌍 Live Demo

👉 Live Demo:
https://your-project.vercel.app
