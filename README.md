# Frontend Task - Next.js

## Project Overview
This project implements a Frontend Task using Next.js, including a full Authentication flow and a pixel-perfect Product Details page.

## Features
- **Authentication**:
  - Register (Name, Email, Password, Mobile)
  - Verify Account (OTP)
  - Login (Email, Password)
  - Dashboard (Protected Route)
- **UI Implementation**:
  - Pixel-perfect Product Details Page (Home)
  - Responsive Design (Desktop & Mobile)
  - Modern UI components using Tailwind CSS

## Tech Stack
- Next.js 15+ (App Router)
- React 19
- Tailwind CSS 4
- React Hook Form + Zod (Validation)
- Lucide React (Icons)
- Axios (API Integration)

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd nextjs-task
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Ensure you have a `.env` file with:
    ```env
    NEXT_PUBLIC_API_BASE_URL= https://tinytales.trendline.marketing/api
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

5.  **Build for Production:**
    ```bash
    npm run build
    npm start
    ```

## Project Structure
- `src/app`: App Router pages and layouts.
- `src/components/forms`: Auth forms (Register, Login, Verify).
- `src/components/product`: Product Page components (Navbar, Gallery, Info, etc.).
- `src/services`: API service functions.
- `src/hooks`: Custom hooks (useLogin, useRegister, useVerify).

## Notes
- Testing Verification Code: `123456`
