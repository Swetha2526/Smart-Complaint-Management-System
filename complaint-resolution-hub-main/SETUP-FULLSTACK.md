# 🚀 Full-Stack Setup Guide

This guide helps you set up and run both the **Frontend** and **Backend** applications.

## 📁 Project Structure

```
complaint-resolution-hub-main/
├── frontend/     (React Application - http://localhost:5173)
├── backend/      (Express.js API - http://localhost:5000)
└── README.md     (This project overview)
```

## ⚡ Quick Setup (5 minutes)

### Terminal 1 - Frontend
```bash
cd frontend
npm install
npm run dev
```
**Frontend runs on:** http://localhost:5173/

### Terminal 2 - Backend (When Ready)
```bash
cd backend
npm install
npm run dev
```
**Backend runs on:** http://localhost:5000/

## 🔄 Communication Flow

Currently, the frontend uses **localStorage** to store data (no backend calls).

To connect frontend to backend later:
1. Update API endpoints in frontend context files
2. Point to `http://localhost:5000/api`
3. Replace mock data with real API calls

## 📝 Frontend Quick Start

```bash
cd frontend
npm install        # Install dependencies (first time only)
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Check code quality
npm run test       # Run tests
```

**Available at:** http://localhost:5173/

### Frontend Features (Now Working)
- ✅ User Login/Authentication
- ✅ Dashboard with Statistics
- ✅ Complaint Management
- ✅ Theme Toggle (Dark/Light)
- ✅ AI Helpline Chat
- ✅ Responsive Design
- ✅ Sample Data Included

### Frontend Login Credentials
- Email: `demo@example.com`
- Password: `password123`

## 📝 Backend Setup (For Future Implementation)

```bash
cd backend
npm install        # Install dependencies
cp .env.example .env  # Create environment file
npm run dev        # Start backend server
```

**Available at:** http://localhost:5000/api

### Backend Placeholder Endpoints
- `GET /api/health` - Health check
- `GET /api/complaints` - Get complaints (not implemented)
- `POST /api/complaints` - Create complaint (not implemented)
- `POST /api/auth/login` - Login (not implemented)

### Backend Configuration (`.env`)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/complaint-hub
JWT_SECRET=your_secret_key_here
CORS_ORIGIN=http://localhost:5173
```

## 🛠️ Development Workflow

### Step 1: Start Frontend (Recommended First)
```bash
cd frontend
npm install    # First time only
npm run dev
```

### Step 2: Test Frontend Features
- Open http://localhost:5173/
- Login with demo credentials
- Explore all features
- All features work with localStorage

### Step 3: Start Backend (When Ready)
```bash
cd backend
npm install    # First time only
cp .env.example .env
npm run dev
```

### Step 4: Connect Frontend to Backend (Optional)
- Update API calls in frontend
- Point to http://localhost:5000/api
- Implement proper error handling

## 📊 Port Information

| Service | URL | Default Port | Config File |
|---------|-----|--------------|-------------|
| Frontend | http://localhost:5173 | 5173 | `frontend/vite.config.ts` |
| Backend | http://localhost:5000 | 5000 | `backend/.env` |

## 🐛 Troubleshooting

### Frontend Won't Start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 5173 Already in Use
Edit `frontend/vite.config.ts` and change the port:
```typescript
server: {
  port: 5174,  // Change to different port
}
```

### Backend Port 5000 in Use
Edit `backend/.env`:
```
PORT=5001  # Change to different port
```

### Module Not Found Error
```bash
# In the affected directory (frontend or backend)
rm -rf node_modules package-lock.json
npm install
```

### MongoDB Connection Error (Backend)
Ensure MongoDB is running:
```bash
# Install MongoDB then run:
mongod
```

## 📚 Detailed Documentation

- **Frontend Guide:** See `frontend/README.md`
- **Frontend Setup:** See `frontend/SETUP.md`
- **Frontend Quick Start:** See `frontend/QUICK-START.md`
- **Backend Guide:** See `backend/README.md`
- **Project Overview:** See `README.md` (root)

## 🔄 Running Both Simultaneously

### Option 1: Two Terminal Windows
```bash
# Terminal 1
cd frontend && npm run dev

# Terminal 2
cd backend && npm run dev
```

### Option 2: If You Have concurrently
Install at root level:
```bash
npm install concurrently -g
```

Then in root directory:
```bash
concurrently "cd frontend && npm run dev" "cd backend && npm run dev"
```

### Option 3: VS Code
- Open two terminals: `Ctrl + Shift + Ñ` (or Cmd + Shift + Ñ on Mac)
- Run frontend in Terminal 1
- Run backend in Terminal 2

## ✅ Verification Checklist

- ✅ Frontend runs on http://localhost:5173/
- ✅ Frontend login works with demo@example.com
- ✅ All features functional in frontend
- ✅ Backend server starts on http://localhost:5000 (when running)
- ✅ Backend health check: http://localhost:5000/api/health
- ✅ CORS properly configured for frontend

## 🎯 Next Steps

1. **Explore Frontend:** Test all features with sample data
2. **Understand Architecture:** Review code in both folders
3. **Plan Backend:** Design API endpoints as needed
4. **Implement Backend:** Build database models and API routes
5. **Connect:**Update frontend to use real API calls
6. **Deploy:** Host frontend and backend separately

## 📞 Need Help?

### Frontend Issues
- Check `frontend/README.md`
- Check `frontend/SETUP.md`
- Verify Node.js is installed: `node --version`

### Backend Issues
- Check `backend/README.md`
- Verify MongoDB is running
- Check `.env` file configuration

### General Issues
- Check main `README.md`
- Clear node_modules and reinstall
- Check port availability

## 🚀 You're All Set!

Start with frontend first:
```bash
cd frontend
npm install
npm run dev
```

Then visit: **http://localhost:5173/**

Enjoy building! 🎉
