// Backend API Setup for Complaint Resolution Hub
// This is a placeholder for future backend implementation

// Future structure:
// - Express.js API server
// - MongoDB database connection
// - Authentication with JWT
// - Complaint management endpoints
// - User management endpoints

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;

// Path to frontend dist folder
const frontendDistPath = path.join(__dirname, '../../frontend/dist');

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend dist
app.use(express.static(frontendDistPath));

// API Welcome Route
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to Complaint Resolution Hub API',
    version: '1.0.0',
    status: 'Backend API is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: 'GET /api/health',
      complaints: {
        getAll: 'GET /api/complaints',
        create: 'POST /api/complaints',
        update: 'PUT /api/complaints/:id',
        delete: 'DELETE /api/complaints/:id'
      },
      auth: {
        login: 'POST /api/auth/login',
        register: 'POST /api/auth/register'
      }
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend API is running', timestamp: new Date().toISOString() });
});

// Complaint endpoints (TODO: Implement full CRUD)
app.get('/api/complaints', (req, res) => {
  // TODO: Fetch complaints from database
  res.json({ message: 'Get all complaints - Not implemented yet' });
});

app.post('/api/complaints', (req, res) => {
  // TODO: Create new complaint in database
  res.json({ message: 'Create complaint - Not implemented yet' });
});

// User authentication endpoints (TODO: Implement)
app.post('/api/auth/login', (req, res) => {
  // TODO: Implement authentication with JWT
  res.json({ message: 'Login - Not implemented yet' });
});

app.post('/api/auth/register', (req, res) => {
  // TODO: Implement user registration
  res.json({ message: 'Register - Not implemented yet' });
});

// SPA Routing - Serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

// 404 Not Found Handler (for API routes not matched)
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.path}`,
    availableEndpoints: 'GET /api'
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
