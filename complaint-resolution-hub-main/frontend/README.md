# Complaint Resolution Hub

A modern, fully functional complaint resolution and management system built with React, TypeScript, and Tailwind CSS. This is a **localhost-based application** with all features working locally - no external dependencies or API calls required.

## 🎯 Features

- **User Authentication**: Role-based login system (User/Admin) with local storage persistence
- **Dashboard**: Real-time statistics and overview of all complaints
- **Complaint Management**: 
  - Submit new complaints with category and description
  - View all complaints with filtering and search
  - Update complaint status (Pending → In Progress → Resolved)
  - Delete complaints
- **Theme Support**: Dark/Light mode toggle
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **AI-powered Helpline Chatbot**: Get instant help with complaint resolution
- **Settings Page**: User profile management and preferences
- **Beautiful UI**: Built with shadcn/ui components and Tailwind CSS animations

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
```bash
cd complaint-resolution-hub-main
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and visit:**
```
http://localhost:5173/
```

## 📝 Available Scripts

### Development
```bash
npm run dev        # Start development server with hot reload
npm run preview    # Preview production build locally
```

### Production
```bash
npm run build      # Build optimized production bundle
```

### Testing & Quality
```bash
npm run test       # Run tests once
npm run test:watch # Run tests in watch mode
npm run lint       # Check code for linting errors
```

## 🔐 Login Credentials

For demo purposes, you can log in with any valid email format and password:

**Test Credentials:**
- Email: `demo@example.com` (or any valid email format)
- Password: `password123` (minimum 6 characters)
- Role: Select **User** or **Admin** from the tabs

**Note:** All data is stored locally in browser storage and will persist across sessions.

## 📂 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui components
│   ├── AppLayout.tsx    # Main app layout
│   ├── AppSidebar.tsx   # Navigation sidebar
│   ├── HelplineChatbot.tsx  # AI chatbot component
│   └── ...
├── context/             # React Context for state management
│   ├── AuthContext.tsx      # Authentication state
│   ├── ComplaintContext.tsx # Complaint data management
│   ├── ProfileContext.tsx   # User profile state
│   └── ThemeContext.tsx     # Theme/Dark mode state
├── pages/               # Page components
│   ├── Dashboard.tsx    # Main dashboard
│   ├── Complaints.tsx   # Complaints list/management
│   ├── SubmitComplaint.tsx  # Submit new complaint
│   ├── SettingsPage.tsx     # User settings
│   ├── Login.tsx        # Login page
│   └── NotFound.tsx     # 404 page
├── types/               # TypeScript type definitions
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── styles/              # Global styles
```

## 🎨 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.8
- **Build Tool**: Vite 8.0.0
- **Styling**: Tailwind CSS 3.4 + shadcn/ui
- **State Management**: React Context API
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Testing**: Vitest + Playwright
- **Linting**: ESLint

## 💾 Data Storage

All data is stored locally using:
- **localStorage**: For authentication and user preferences
- **React Context**: For real-time state management

**Sample Data Provided:**
The application comes with 3 sample complaints to demonstrate functionality. You can add, edit, and delete complaints freely.

## 🧪 Testing

Run tests with:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `playwright.config.ts` - E2E testing configuration
- `eslint.config.js` - Linting rules

## 📱 Features in Detail

### Dashboard
- Shows statistics for Total, Pending, In Progress, and Resolved complaints
- Displays recent complaints in a table format
- Real-time updates as complaints status changes

### Complaint Management
- **Submit**: Fill form with name, email, category, and description
- **View**: Browse all complaints with ID, category, and status
- **Update**: Change complaint status through dropdown menus
- **Delete**: Remove complaints from the system

### User Roles
- **User**: Can submit and view their complaints
- **Admin**: Has full access to manage all complaints

### Theme Support
- Toggle between Light and Dark modes
- Preference persists across sessions

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 5173 Already in Use
```bash
# Kill the process or modify vite.config.ts to use different port
```

### Styles Not Loading
```bash
# Rebuild Tailwind CSS
npm run build
```

## 🌐 Hosting & Deployment

To deploy the production build:

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains the production-ready files that can be hosted:
   - On any static hosting service (Vercel, Netlify, GitHub Pages)
   - On your own server with a simple HTTP server

3. Example: Simple local preview
```bash
npm run preview
```

## 📞 Support Features

- **AI Helpline Chat**: Click the chat icon to get instant help
- **Settings Page**: Manage your account and preferences
- **Responsive Design**: Works on all screen sizes

## ⚙️ Performance Tips

- The application runs entirely on the client-side
- No network calls or API latency delays
- Data persistence happens instantly via browser storage
- Lightning-fast load times and perfectly smooth interactions

## 📄 License

This project is open source and available under your preferred license.

## 🎓 Learning Resources

This project demonstrates:
- Modern React patterns with hooks and context API
- TypeScript best practices
- Tailwind CSS responsive design
- Component-based architecture
- Form handling and validation with React Hook Form
- State management without external libraries

---

**Happy coding! 🚀** For any issues or questions, please check the project structure and ensure all dependencies are installed correctly.
