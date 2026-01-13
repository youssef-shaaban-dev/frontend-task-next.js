# 🛍️ Next.js Authentication Flow

## 📁 Project Structure

```
nextjs-task/
├── public/
│   ├── items/          # Product slider images
│   ├── products/       # Product gallery images
│   └── logo.png        # Brand logo
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── dashboard/  # User dashboard
│   │   ├── login/      # Login page
│   │   ├── register/   # Registration page
│   │   └── page.tsx    # Product details page
│   ├── components/
│   │   ├── forms/      # Form components
│   │   ├── product/    # Product-related components
│   │   ├── shared/     # Shared components (Navbar, Footer)
│   │   └── ui/         # Base UI components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API service functions
│   ├── types/          # TypeScript type definitions
│   ├── validations/    # Zod validation schemas
│   └── lib/            # Utility functions
└── package.json
```

## ✨ Features

### 🔐 Authentication System
- **User Registration** with email verification
- **Login/Logout** functionality
- **Password validation** with strength requirements
- **International phone number** validation using `libphonenumber-js`
- **JWT token management** with secure storage
- **User dashboard** with profile overview

### 🛒 Product Pages
- **Product Gallery** with image carousel and thumbnail navigation
- **Product Details** with dynamic pricing, size/type selectors, and color swatches
- **Reviews & Ratings** section with visual progress bars
- **Similar Items Slider** powered by Swiper.js

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or 

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd nextjs-task
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env

NEXT_PUBLIC_API_URL= https://tinytales.trendline.marketing/api
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Poppins Font** - Google Fonts integration
- **Custom Components** - Reusable UI components

### State Management & Data Fetching
- **React Query (TanStack Query)** - Server state management
- **Axios** - HTTP client with interceptors

### Form Handling & Validation
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **libphonenumber-js** - International phone validation

### UI Libraries
- **Shadcn ui** - modern ui library
- **Swiper.js** - Modern slider/carousel
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notifications


## 🎯 Key Components

### Product Components
- **ProductGallery** - Image carousel with thumbnails
- **ProductInfo** - Product details, selectors, and cart actions
- **ReviewsSection** - Ratings and customer reviews
- **SimilarItems** - Responsive product slider

### Shared Components
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Dark-themed footer with social links
- **Sidebar** - Dashboard navigation

### Form Components
- **LoginForm** - User authentication
- **RegisterForm** - New user registration
- **VerifyForm** - Email verification

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 API Integration

The application integrates with a backend API for:
- User authentication (register, login, verify, logout)
- User data management
- Product information
- Shopping cart operations

API client configuration with interceptors for:
- Request/response logging
- Error handling with toast notifications
- JWT token management

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

Custom breakpoints for Swiper slider:
- 480px, 640px, 768px, 1024px, 1280px

## 🎨 Design System

### Colors
- **Primary**: #BE968E (Rose Gold)
- **Text**: #333333, #000000
- **Background**: #FFFFFF, #ECECEC66

### Typography
- **Font Family**: Poppins
- **Weights**: 100-900

## 👨‍💻 Author

**Youssef Shaaban**

---

Built with ❤️ using Next.js and modern web technologies
