# Setup & Deployment Guide for Complaint Resolution Hub

## 📋 System Requirements

- **Node.js**: v16.x or higher
- **npm**: v8.x or higher (comes with Node.js)
- **RAM**: 512MB minimum
- **Disk Space**: 500MB for node_modules

## ✅ Step-by-Step Setup Instructions

### 1. Clone/Extract the Project
```bash
# Navigate to project directory (adjust path as needed)
cd complaint-resolution-hub-main
```

### 2. Install Dependencies
```bash
npm install
```
This will install all required packages (approximately 468 packages, ~400MB).

### 3. Start Development Server
```bash
npm run dev
```

**Expected Output:**
```
  VITE v8.0.3  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### 4. Open in Browser
Navigate to: **http://localhost:5173/**

## 🔑 Login & Testing

### Test Login Credentials
- **Email**: `test@example.com` (any valid email format works)
- **Password**: `password123` (any password with 6+ characters)
- **Role**: Toggle between "User" and "Admin"

### Default Sample Data
The app includes 3 pre-loaded sample complaints for testing:
1. Billing Issue - Duplicate Charge
2. Technical Issue - File Upload Error
3. Service Quality - Slow Support Response

## 🚀 Common Commands

### Development
```bash
npm run dev          # Start dev server (with hot reload)
npm run preview      # Preview production build
npm run build        # Build for production
```

### Code Quality
```bash
npm run lint         # Check for linting errors
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode
```

## 📁 Project Structure After Setup

```
complaint-resolution-hub-main/
├── src/
│   ├── components/          # React components
│   ├── context/             # State management (Auth, Complaints, Theme, Profile)
│   ├── pages/               # Page components (Dashboard, Login, etc.)
│   ├── types/               # TypeScript types
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main App component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── dist/                    # Production build (created after npm run build)
├── node_modules/            # Dependencies (created after npm install)
├── package.json             # Project metadata & dependencies
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── README.md                # Project documentation
```

## 🐛 Troubleshooting

### Issue: "Port 5173 Already in Use"
**Solution**: Kill the existing process or use a different port
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/
- Download LTS version
- Follow installation wizard
- Restart terminal/command prompt

### Issue: "Module not found" or TypeScript errors
**Solution**: Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Styles/CSS not loading
**Solution**: Rebuild Tailwind CSS
```bash
npm run build
npm run preview
```

### Issue: "Permission denied" on Mac/Linux
**Solution**: Fix permissions
```bash
chmod -R 755 node_modules
npm run dev
```

## 🔄 Hot Reload Development

1. **Dev server is running** on http://localhost:5173/
2. **Edit any file** in `src/` folder
3. **Browser auto-updates** within 1-2 seconds
4. **No page refresh needed** - state is preserved

## 📦 Production Build

To create a production-ready build:

```bash
# Generate optimized build
npm run build

# Test the production build locally
npm run preview
```

**Output Location**: `dist/` folder

**What's generated**:
- `dist/index.html` - Main HTML file
- `dist/assets/` - Minified JS and CSS files
- Ready for deployment to any static hosting (Netlify, Vercel, GitHub Pages, etc.)

## 🌐 Hosting Options

### Option 1: Netlify (Easiest)
1. Push code to GitHub
2. Connect GitHub to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Option 2: Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Framework: Vite
4. Auto-configured for production

### Option 3: GitHub Pages
```bash
npm run build
# Upload dist/ folder contents to GitHub Pages
```

### Option 4: Local HTTP Server
```bash
# After npm run build
npx http-server dist/
# Visit http://localhost:8080
```

## 💾 Data Persistence

- **Authentication**: Stored in browser's localStorage
- **Complaints**: Stored in React Context (session-based, or in localStorage if implemented)
- **User Preferences**: Stored in localStorage
- **No Database Required**: Everything runs locally

## 🔒 Security Notes

This is a **demonstration/development application**:
- No real passwords are validated
- No backend authentication
- All data stored locally in browser
- Not suitable for production without backend security implementation

For production use, implement:
- Real backend authentication
- Database for data persistence
- HTTPS/SSL encryption
- Input validation on server-side
- Rate limiting & security headers

## 🎯 Feature Checklist

- ✅ User Login/Authentication
- ✅ Dashboard with Statistics
- ✅ Complaint Submission Form
- ✅ Complaint Management (CRUD)
- ✅ Status Updates
- ✅ Dark/Light Theme
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ AI Helpline Chatbot
- ✅ User Settings Page
- ✅ Sample Data Included
- ✅ Local Storage Persistence

## 📞 Support

For issues:
1. Check that Node.js is installed: `node --version`
2. Verify npm: `npm --version`
3. Try clean install: `rm -rf node_modules && npm install`
4. Check console for error messages
5. Ensure port 5173 is available

## 🎓 Next Steps

1. **Explore the UI**: Navigate through all features
2. **Test with sample data**: Use pre-loaded complaints
3. **Try dark mode**: Toggle in settings
4. **Create new complaints**: Test the form validation
5. **Test responsiveness**: Resize browser to mobile size
6. **Review code**: Check `src/` folder to understand architecture

---

**Happy testing! 🚀** The application is now ready for development and testing on your local machine.