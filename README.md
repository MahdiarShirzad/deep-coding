# 💻 deep-coding
> A full-stack, production-ready Udemy-style programming education platform built with React/Vite frontend and Node.js/Express backend, designed for aspiring developers to learn, teach, and master coding skills.

---

## ⚡ Overview
**deep-coding** is a comprehensive education platform that empowers learners to master programming concepts through structured courses, interactive blogs, and curated programming books. Built with a modern, responsive React/Vite frontend and a robust Node.js/Express backend, the platform supports three distinct user roles—**Students**, **Teachers**, and **Admins**—each with tailored workflows and permissions.

The frontend delivers a clean, developer-focused experience with role-based access control (RBAC), real-time notifications, and seamless API integration. Students browse and enroll in courses, teachers create and manage their content, and admins oversee platform health with analytics and user management.

---

## 🛠️ Tech Stack

### Frontend
* **Build Tool & Framework:** Vite + React.js (with Modern Hooks & Context API)
* **Language:** JavaScript/ES6+
* **Styling & Theme:** Tailwind CSS (Custom dark theme optimized for long study sessions)
* **State Management & Data Fetching:** TanStack React Query (with custom `apiRequest` utility)
* **Authentication:** JWT-based with automatic header injection via `apiRequest`
* **Icons & Components:** Lucide React, shadcn/ui
* **Form Handling:** React Hook Form with Zod validation
* **Charts & Analytics:** Recharts (for admin dashboard stats and review distributions)

### Backend (Node.js/Express)
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose ODM
* **Storage:** Arvan Cloud S3 (Iranian S3-compatible service)
* **Authentication & Authorization:** JWT + custom `protect` and `restrictTo` middleware
* **Deployment:** Vercel (frontend), Arvan Cloud (backend)

---

## 🎯 Key Features

### For Students
* **Course Browsing & Enrollment:** Search, filter, and enroll in courses with real-time availability
* **Wishlist & Cart System:** Save courses for later and manage purchase flow
* **Progress Tracking:** Monitor learning journey with visual progress indicators
* **Review System:** Rate courses and view detailed rating distributions
* **Responsive Learning:** Access content on any device

### For Teachers
* **Course Management:** Create, edit, and publish courses with structured sections and videos
* **Content Organization:** Manage chapters, sections, videos, and course metadata
* **Student Insights:** View ratings, reviews, and enrollment analytics
* **Blog Publishing:** Write and manage educational blog posts with tagging
* **Teacher Dashboard:** Monitor course performance and student engagement

### For Admins
* **Platform Analytics:** Dashboard with financial stats (revenue, pending payouts, earnings)
* **User Management:** View and manage students, teachers, and platform users
* **Content Moderation:** Oversee courses, blogs, and books across the platform
* **Review Management:** Monitor and moderate reviews across all content types
* **Financial Tracking:** Real-time payouts, orders, and revenue distribution

### Global Features
* **Unified Review System:** Rate and review courses, blogs, and books with star ratings and comments
* **Pagination & Infinite Loading:** Efficient data loading with both traditional pagination and load-more patterns
* **Search & Filtering:** Advanced filtering by category, difficulty, rating, and more
* **File Uploads:** Seamless S3 integration for course videos, thumbnails, and user avatars
* **Role-Based Access Control:** Three-tier permission system enforced on frontend and backend

---

## 🏗️ Architecture & Conventions

### API Layer (`src/services/apiRequest.js`)
```javascript
// All API calls use a unified apiRequest utility
const apiRequest = async (endpoint, options = {}) => {
  const { body, method = "GET", skipAuth = false, ...rest } = options;
  const headers = {
    "Content-Type": "application/json",
    ...(!skipAuth && { Authorization: `Bearer ${token}` }),
  };
  return fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });
};
```

**Conventions:**
- Pass raw objects as `body` (not pre-stringified)
- Handle 204 No Content responses without calling `.json()`
- Use `skipAuth: true` for public endpoints (login, signup)
- Auth header is injected automatically

### React Query Patterns
```javascript
// Derive state directly from query data
const { data: courses, isLoading, error } = useQuery({
  queryKey: ["courses"],
  queryFn: () => apiRequest("/courses").then(r => r.json()),
});

// Invalidate after mutations to trigger refetch
const mutation = useMutation({
  mutationFn: (payload) => apiRequest("/courses", { method: "POST", body: payload }),
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["courses"] }),
});
```

**Conventions:**
- Wrap query functions in arrow functions (avoid context serialization bugs)
- Use `keepPreviousData: true` for paginated queries
- Derive UI state from `data`, `isLoading`, `error` directly
- Invalidate relevant queries after mutations

### File Upload & FormData
```javascript
const formData = new FormData();
formData.append("title", course.title);
// For nested objects, stringify before appending
formData.append("teacherInfo", JSON.stringify({ bio, expertise }));

const response = await apiRequest("/users/me", {
  method: "PATCH",
  body: formData,
  "Content-Type": undefined, // Let browser set boundary
});
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Shared UI (Header, Footer, Navigation)
│   ├── courses/          # Course-related components
│   ├── dashboard/        # Admin, Teacher, and User dashboards
│   ├── reviews/          # Review and rating components
│   └── loading/          # Skeleton loaders and spinners
├── pages/
│   ├── auth/             # Login, Signup, Profile
│   ├── courses/          # Course listing, detail, enroll
│   ├── dashboard/        # Role-based dashboards
│   ├── blogs/            # Blog listing and detail
│   └── books/            # Programming books library
├── services/
│   ├── apiRequest.js     # Unified API utility
│   ├── courseService.js  # Course CRUD
│   ├── authService.js    # Login, signup, token management
│   ├── reviewService.js  # Reviews for courses/blogs/books
│   └── userService.js    # User profile and preferences
├── hooks/
│   ├── useAuth.js        # Auth context and token management
│   ├── useQueryParams.js # URL query parameter handling
│   └── useRole.js        # Role-based conditional rendering
├── context/
│   ├── AuthContext.js    # Global auth state
│   └── ThemeContext.js   # Dark theme management
└── utils/
    ├── format.js         # Date, price, and text formatting
    ├── validators.js     # Form validation helpers
    └── constants.js      # Enum-like constants (roles, statuses)
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+ recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* Access to backend API (local or cloud)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/MahdiarShirzad/deep-coding.git
cd deep-coding
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_ARVAN_CLOUD_URL=https://s3.irancell.ir
```

4. **Start the development server:**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

5. **Build for production:**
```bash
npm run build
```

---

## 🔐 Authentication & Authorization

### Role-Based Access Control (RBAC)

Three roles control feature availability:

| Role | Permissions |
|------|-------------|
| **Student** | Enroll in courses, purchase, write reviews, access cart/wishlist |
| **Teacher** | Create/edit courses and blogs, view student reviews, access teacher dashboard |
| **Admin** | Manage all users, oversee all content, view platform analytics, moderate reviews |

### Protected Endpoints

Frontend checks user role before rendering protected pages:
```javascript
const ProtectedRoute = ({ requiredRole, children }) => {
  const { user } = useAuth();
  if (user?.role !== requiredRole) return <Navigate to="/login" />;
  return children;
};
```

Backend enforces RBAC via middleware:
```javascript
// Backend: app.js
router.post("/courses", protect, restrictTo("teacher"), createCourse);
router.patch("/users/:id", protect, updateUser); // Admin-only updates
```

---

## 📦 Dependencies

### Core
- `react` — UI library
- `vite` — Build tool
- `react-router-dom` — Routing
- `@tanstack/react-query` — Server state management
- `axios` — HTTP client (optional, using native fetch)

### UI & Styling
- `tailwindcss` — Utility-first CSS
- `lucide-react` — Icon library
- `shadcn/ui` — Accessible component library

### Forms & Validation
- `react-hook-form` — Performant form handling
- `zod` — TypeScript-first schema validation

### Charts & Analytics
- `recharts` — React charting library for dashboards

### Utilities
- `date-fns` — Date formatting and manipulation
- `clsx` — Conditional class names

---

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Vercel auto-deploys on push


```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Branch naming:** `feature/feature-name` or `fix/bug-name`
2. **Commit messages:** Clear, descriptive, and actionable
3. **Code style:** Follow existing patterns (React Query conventions, API layer abstraction)
4. **Testing:** Ensure no console errors or warnings before submitting PR

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

* Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
* Styling with [Tailwind CSS](https://tailwindcss.com/) and [Lucide React](https://lucide.dev/)
* State management with [TanStack Query](https://tanstack.com/query/latest)
* Hosted on [Vercel](https://vercel.com/)

---

## 📞 Support & Contact

For issues, feature requests, or questions, please open an issue on GitHub or reach out via email.

**GitHub:** [MahdiarShirzad/deep-coding](https://github.com/MahdiarShirzad/deep-coding)

---

**Last Updated:** June 2026  
**Status:** 🚀 Active Development
