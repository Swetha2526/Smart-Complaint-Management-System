# Backend - Complaint Resolution Hub

This folder contains the backend API for the Complaint Resolution Hub application.

## 📋 Project Structure

```
backend/
├── src/
│   └── index.js              # Main Express server
├── .env.example              # Environment variables template
├── package.json              # Backend dependencies
└── README.md                 # This file
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 16.x or higher
- npm or yarn
- MongoDB (for database)

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/complaint-hub
# JWT_SECRET=your_secret_key
```

### 3. Start Development Server
```bash
npm run dev
```

The backend will run on: **http://localhost:5000**

### 4. Test Health Check
```bash
curl http://localhost:5000/api/health
```

## 📝 Available Endpoints (TODO - To be implemented)

### Complaints
- `GET /api/complaints` - Get all complaints
- `POST /api/complaints` - Create new complaint
- `GET /api/complaints/:id` - Get complaint by ID
- `PUT /api/complaints/:id` - Update complaint
- `DELETE /api/complaints/:id` - Delete complaint

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

## 🔧 Tech Stack

- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **Environment:** Node.js
- **CORS:** Enabled for frontend (localhost:5173)

## 📚 Integration with Frontend

The frontend at `../frontend/` communicates with this backend API.

**Frontend URL:** http://localhost:5173  
**Backend URL:** http://localhost:5000

Update the frontend API calls to point to:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## 🧪 Testing

```bash
npm test
```

## 🐛 Troubleshooting

### Port 5000 Already in Use
Edit `.env` and change `PORT` to a different value (e.g., 5001)

### MongoDB Connection Error
Ensure MongoDB is running:
```bash
# Mac/Linux
mongod

# Windows - MongoDB service should be running
```

### Module Not Found Error
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📖 Next Steps

1. Implement all endpoints (CRUD operations)
2. Add JWT authentication middleware
3. Connect MongoDB database
4. Add input validation
5. Add error handling
6. Add API documentation (Swagger/OpenAPI)
7. Add unit and integration tests
8. Set up CI/CD pipeline

## 🔗 Frontend Integration

After implementing the backend:

1. Update frontend API service to use `http://localhost:5000`
2. Remove localStorage-based mock data
3. Update context providers to use real API calls
4. Implement proper error handling

## 📞 Support

For questions about backend setup or integration, refer to the main README in the project root.
