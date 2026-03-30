# 📁 Frontend & Backend Folder Structure

## Complete Project Layout

```
complaint-resolution-hub-main/
│
├── 📂 frontend/                          ⭐ React Application  
│   ├── 📂 src/
│   │   ├── 📂 components/                # React components & UI
│   │   │   ├── 📂 ui/                   # shadcn/ui components
│   │   │   ├── AppLayout.tsx
│   │   │   ├── AppSidebar.tsx
│   │   │   ├── HelplineChatbot.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   └── ... (other components)
│   │   │
│   │   ├── 📂 context/                  # State Management
│   │   │   ├── AuthContext.tsx          # User authentication
│   │   │   ├── ComplaintContext.tsx     # Complaint data
│   │   │   ├── ProfileContext.tsx       # User profile
│   │   │   └── ThemeContext.tsx         # Theme/Dark mode
│   │   │
│   │   ├── 📂 pages/                    # Page Components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Complaints.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── SubmitComplaint.tsx
│   │   │   ├── SettingsPage.tsx
│   │   │   └── NotFound.tsx
│   │   │
│   │   ├── 📂 hooks/                    # Custom React Hooks
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   │
│   │   ├── 📂 lib/                      # Utilities
│   │   │   └── utils.ts
│   │   │
│   │   ├── 📂 types/                    # TypeScript Types
│   │   │   └── complaint.ts
│   │   │
│   │   ├── App.tsx                      # Main App component
│   │   ├── App.css                      # App styles
│   │   ├── main.tsx                     # Entry point
│   │   ├── index.css                    # Global styles
│   │   └── vite-env.d.ts               # Vite types
│   │
│   ├── 📂 public/                       # Static assets
│   │   └── robots.txt
│   │
│   ├── 📄 Configuration Files
│   │   ├── package.json                 # Dependencies & scripts
│   │   ├── package-lock.json            # Dependency lock file
│   │   ├── vite.config.ts              # Vite build config
│   │   ├── tsconfig.json               # TypeScript config
│   │   ├── tsconfig.app.json           # App TypeScript config
│   │   ├── tsconfig.node.json          # Node TypeScript config
│   │   ├── tailwind.config.ts          # Tailwind CSS config
│   │   ├── postcss.config.js           # PostCSS config
│   │   ├── eslint.config.js            # Linting rules
│   │   ├── vitest.config.ts            # Testing config
│   │   ├── playwright.config.ts        # E2E testing config
│   │   ├── playwright-fixture.ts       # Test fixtures
│   │   ├── components.json             # shadcn/ui config
│   │   └── index.html                  # HTML template
│   │
│   ├── 📂 test/                         # Tests
│   │   ├── example.test.ts
│   │   └── setup.ts
│   │
│   ├── 📂 dist/                         # Production build (generated)
│   ├── 📂 node_modules/                 # Dependencies (generated)
│   │
│   ├── 📚 Documentation
│   │   ├── README.md                    # Frontend documentation
│   │   ├── SETUP.md                     # Setup instructions
│   │   ├── QUICK-START.md              # Quick reference
│   │   └── CONVERSION-SUMMARY.md       # Migration details
│   │
│   ├── 🚀 Startup Scripts
│   │   ├── start-dev.bat               # Windows startup
│   │   └── start-dev.sh                # Mac/Linux startup
│   │
│   ├── .gitignore                      # Git ignore file
│   └── bun.lock                        # Bun lock file
│
├── 📂 backend/                          ⭐ Express.js API
│   ├── 📂 src/
│   │   ├── index.js                    # Main server file
│   │   │
│   │   ├── 📂 config/                  # Configuration
│   │   │   └── database.js             # MongoDB config
│   │   │
│   │   ├── 📂 models/                  # (TODO) Database Models
│   │   │   ├── Complaint.js            # Complaint schema
│   │   │   └── User.js                 # User schema
│   │   │
│   │   ├── 📂 routes/                  # (TODO) API Routes
│   │   │   ├── complaints.js           # Complaint routes
│   │   │   ├── auth.js                 # Auth routes
│   │   │   └── users.js                # User routes
│   │   │
│   │   ├── 📂 controllers/             # (TODO) Route Handlers
│   │   │   ├── complaintController.js
│   │   │   ├── authController.js
│   │   │   └── userController.js
│   │   │
│   │   ├── 📂 middleware/              # (TODO) Middleware
│   │   │   ├── auth.js                 # JWT authentication
│   │   │   ├── validate.js             # Input validation
│   │   │   └── errorHandler.js         # Error handling
│   │   │
│   │   └── 📂 utils/                   # (TODO) Utilities
│   │       ├── validators.js
│   │       └── helpers.js
│   │
│   ├── 📄 Configuration Files
│   │   ├── package.json                # Dependencies & scripts
│   │   ├── .env.example                # Environment template
│   │   └── README.md                   # Backend documentation
│   │
│   └── 📂 node_modules/                # Dependencies (generated)
│
├── 📚 Root Documentation
│   ├── README.md                       # Project overview
│   ├── SETUP-FULLSTACK.md             # Full-stack setup guide
│   ├── INTEGRATION-GUIDE.md           # Frontend-Backend integration
│   ├── FOLDER-STRUCTURE.md            # This file
│   └── .gitignore                     # Git ignore file
│
└── 📂 .vite/                           # Vite cache (generated)
```

## 🎯 Key Points

### Frontend Directory
- **Purpose:** React SPA (Single Page Application)
- **Tech:** React 18, TypeScript, Vite, Tailwind CSS
- **Port:** 5173
- **Entry:** `frontend/src/main.tsx`
- **Build:** `npm run dev` (development)
- **Status:** ✅ Fully Working

### Backend Directory  
- **Purpose:** Express.js REST API
- **Tech:** Node.js, Express, MongoDB, JWT
- **Port:** 5000
- **Entry:** `backend/src/index.js`
- **Start:** `npm run dev` (with watch mode)
- **Status:** 🔲 Ready for Implementation

## 📂 Folder Separation Benefits

1. **Clear Separation of Concerns**
   - Frontend code separate from backend code
   - Different dependencies and configurations

2. **Independent Development**
   - Work on frontend without backend
   - Work on backend without frontend
   - Different deployment strategies

3. **Easy Maintenance**
   - Find and fix issues faster
   - Cleaner git history per folder
   - Easier to scale

4. **Flexible Deployment**
   - Deploy frontend to CDN/static hosting
   - Deploy backend to app server
   - Different scaling strategies

5. **Team Collaboration**
   - Frontend team works in `frontend/`
   - Backend team works in `backend/`
   - Reduced merge conflicts

## 🚀 Quick Start

### Frontend Only (Currently)
```bash
cd frontend
npm install
npm run dev
```
→ Open http://localhost:5173/

### Both Frontend & Backend (Later)
```bash
# Terminal 1
cd frontend && npm run dev

# Terminal 2
cd backend && npm run dev
```
→ Frontend: http://localhost:5173/  
→ Backend: http://localhost:5000/api

## 📊 Data Flow

### Current (Frontend Only)
```
User Input → React Component → Context/State → localStorage
```

### Future (Full Stack)
```
User Input → React Component → API Service → Backend → MongoDB
```

## ✅ What's Where?

| What | Where |
|------|-------|
| React Components | `frontend/src/components/` |
| Pages/Screens | `frontend/src/pages/` |
| State Management | `frontend/src/context/` |
| React Hooks | `frontend/src/hooks/` |
| TypeScript Types | `frontend/src/types/` |
| Styles | `frontend/src/` (per component .css) |
| Frontend Config | `frontend/` (vite, tailwind, ts config) |
| Express Server | `backend/src/index.js` |
| Database Models | `backend/src/models/` (TODO) |
| API Routes | `backend/src/routes/` (TODO) |
| Controller Logic | `backend/src/controllers/` (TODO) |
| Middleware | `backend/src/middleware/` (TODO) |
| Backend Config | `backend/` (.env, package.json) |

## 🔄 File Movement Summary

### What Was Moved to Frontend
- All React files (`src/`)
- All public assets (`public/`)
- All config files (vite, ts, tailwind, eslint, etc.)
- All documentation (README, SETUP, etc.)
- Startup scripts (start-dev.bat, start-dev.sh)
- Test files and configs
- package.json & dependencies

### What Was Created in Backend
- `src/index.js` - Express server template
- `src/config/database.js` - MongoDB config template
- `package.json` - Backend dependencies
- `.env.example` - Environment variables template
- `README.md` - Backend documentation

## 📝 No Logic Changes

✅ **All frontend features remain unchanged**
- Authentication still works
- Complaint management still works
- Theme toggle still works
- AI chat still works
- All UI components unchanged
- All logic preserved

**Only file locations changed!**

## 🎓 Learning the Structure

1. **New to the project?** Start with `README.md` at root
2. **Frontend developer?** Start with `frontend/README.md`
3. **Backend developer?** Start with `backend/README.md`
4. **Full-stack?** Follow `SETUP-FULLSTACK.md`
5. **Integration?** Check `INTEGRATION-GUIDE.md`

---

Happy coding! 🚀 The structure is now clean and ready for full-stack development.
