# Complaint Resolution Hub - Full Stack

A modern complaint resolution and management system with **separated frontend and backend** architecture.

## 📁 Project Structure

```
complaint-resolution-hub-main/
│
├── frontend/                    # React Frontend Application
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── context/            # State management
│   │   ├── pages/              # Page components
│   │   ├── types/              # TypeScript definitions
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utilities
│   │   ├── App.tsx             # Main app
│   │   └── main.tsx            # Entry point
│   ├── public/                 # Static assets
│   ├── index.html              # HTML template
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.ts          # Vite config
│   ├── tailwind.config.ts      # Tailwind CSS
│   ├── tsconfig.json           # TypeScript config
│   ├── README.md               # Frontend guide
│   ├── SETUP.md                # Setup instructions
│   ├── QUICK-START.md          # Quick reference
│   ├── start-dev.bat           # Windows starter
│   └── start-dev.sh            # Mac/Linux starter
│
├── backend/                     # Express.js Backend API
│   ├── src/
│   │   ├── index.js            # Main server
│   │   ├── config/
│   │   │   └── database.js     # DB config
│   │   ├── models/             # (TODO) Database models
│   │   ├── routes/             # (TODO) API routes
│   │   ├── controllers/        # (TODO) Route handlers
│   │   ├── middleware/         # (TODO) Auth, validation
│   │   └── utils/              # (TODO) Helper functions
│   ├── .env.example            # Environment template
│   ├── package.json            # Backend dependencies
│   └── README.md               # Backend guide
│
└── README.md                    # This file
```

## 🚀 Quick Start

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: **http://localhost:5173/**

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
Backend runs on: **http://localhost:5000**

## ✨ Features

### Frontend (Currently Working)
- ✅ User Authentication (Local Storage)
- ✅ Dashboard with Statistics
- ✅ Complaint Management (CRUD)
- ✅ Theme Support (Dark/Light)
- ✅ AI Helpline Chat
- ✅ User Settings
- ✅ Responsive Design
- ✅ Sample Data Pre-loaded

### Backend (Ready for Implementation)
- 🔲 Express.js API Server
- 🔲 MongoDB Database
- 🔲 JWT Authentication
- 🔲 Complaint Endpoints
- 🔲 User Management
- 🔲 Data Persistence
- 🔲 CORS Configuration
- 🔲 Error Handling

## 🎯 Frontend & Backend Communication

### Current Flow (localStorage)
```
Frontend (React) ←→ localStorage
```

### Future Flow (with Backend)
```
Frontend (React) ←→ Backend API (Express) ←→ MongoDB Database
                    http://localhost:5000
```

### Update Frontend to Use Backend
In `frontend/src/context/ComplaintContext.tsx`:
```javascript
// Replace localStorage calls with API calls
const API_BASE_URL = 'http://localhost:5000/api';

// Example:
const response = await fetch(`${API_BASE_URL}/complaints`);
const data = await response.json();
```

## 📋 Login Credentials

- **Email:** `demo@example.com` (any valid email)
- **Password:** `password123` (6+ characters)
- **Role:** User or Admin

## 🛠️ Technology Stack

### Frontend
- React 18.3
- TypeScript 5.8
- Vite 8.0
- Tailwind CSS 3.4
- React Router v6
- Framer Motion
- React Hook Form + Zod
- shadcn/ui Components

### Backend (Recommended)
- **Runtime:** Node.js 16+
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT
- **Validation:** Joi or Zod
- **Testing:** Jest
- **Environment:** dotenv

## 📝 Development Workflow

### Step 1: Start Frontend
```bash
cd frontend
npm run dev
```
Visit: http://localhost:5173/

### Step 2: Start Backend (when ready)
```bash
cd backend
npm run dev
```
Running on: http://localhost:5000/

### Step 3: Update Frontend to Connect to Backend
Replace mock data with API calls pointing to `http://localhost:5000/api`

## 🔄 Data Flow

```
User Interaction
    ↓
Frontend Component
    ↓
React Context / State
    ↓
API Call to Backend
    ↓
Express Route Handler
    ↓
Database Query (MongoDB)
    ↓
Response to Frontend
    ↓
UI Update
```

## 📦 Frontend Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 📦 Backend Scripts

```bash
npm run dev          # Start dev server with watch
npm start            # Start production server
npm test             # Run tests
```

## 🔐 Security Considerations

### Frontend
- Current: Local storage (demo purposes only)
- Production: JWT tokens, HttpOnly cookies

### Backend
- Implement JWT authentication
- Use environment variables for secrets
- Add request validation
- Implement rate limiting
- Use HTTPS in production
- Sanitize inputs
- Add CORS restrictions

## 📚 Documentation

- **Frontend:** See `frontend/README.md` for detailed frontend documentation
- **Backend:** See `backend/README.md` for backend setup and API documentation
- **Setup:** See `frontend/SETUP.md` for detailed setup instructions
- **Quick Start:** See `frontend/QUICK-START.md` for quick reference

## 🌐 Deployment

### Frontend Deployment
- Build: `cd frontend && npm run build`
- Output: `frontend/dist/` folder
- Deploy to: Netlify, Vercel, GitHub Pages, AWS S3

### Backend Deployment
- Build: Already Node.js code
- Deploy to: Heroku, Railway, AWS, DigitalOcean, Azure

## 🐛 Troubleshooting

### Frontend Won't Start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 5173 in Use
Edit `frontend/vite.config.ts` and change port

### Port 5000 in Use (Backend)
Edit `backend/.env` and change PORT

### MongoDB Connection Error
Ensure MongoDB is running on localhost:27017

## 📞 Support

- Frontend Issues: Check `frontend/README.md`
- Backend Setup: Check `backend/README.md`
- General: See this README

## 🎓 Next Steps

1. **Explore Frontend:** Run it and test all features
2. **Learn Backend:** Set up and implement endpoints
3. **Connect:** Update frontend to use backend API
4. **Enhance:** Add more features as needed
5. **Deploy:** Host both on production servers

## ✅ Project Status

- ✅ Frontend: Production Ready
- 🔲 Backend: Ready for Implementation
- 🔲 Integration: Ready for Connection
- 🔲 Database: Ready for Setup

---

**Happy coding! 🚀** Explore both frontend and backend to understand the full-stack architecture.
