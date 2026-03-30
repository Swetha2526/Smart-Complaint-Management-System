# 🔌 Frontend to Backend Integration Guide

This guide explains how to connect the frontend to the backend API when you're ready.

## 📊 Current vs. Future Architecture

### Current (Frontend Only)
```
Frontend (React) ←→ localStorage
                     (Demo Data)
```

### Future (Full Stack)
```
Frontend (React) ←→ Backend API (Express) ←→ MongoDB
  :5173              :5000                   Database
```

## 🔄 Integration Steps

### Step 1: Setup Backend API

First, ensure your backend is running:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend should be running on: **http://localhost:5000**

### Step 2: Create API Service in Frontend

Create a file `frontend/src/services/api.ts`:

```typescript
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function for API calls
async function apiCall<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: unknown
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // Add auth token if available
      // 'Authorization': `Bearer ${token}`,
    },
  };

  if (data && method !== 'GET') {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Complaint endpoints
export const complaintsAPI = {
  getAll: () => apiCall('/complaints'),
  create: (data: unknown) => apiCall('/complaints', 'POST', data),
  update: (id: string, data: unknown) => apiCall(`/complaints/${id}`, 'PUT', data),
  delete: (id: string) => apiCall(`/complaints/${id}`, 'DELETE'),
};

// Auth endpoints
export const authAPI = {
  login: (email: string, password: string) => 
    apiCall('/auth/login', 'POST', { email, password }),
  register: (email: string, password: string, name: string) =>
    apiCall('/auth/register', 'POST', { email, password, name }),
};

export default apiCall;
```

### Step 3: Update ComplaintContext

In `frontend/src/context/ComplaintContext.tsx`:

```typescript
import { complaintsAPI } from '@/services/api';

export function ComplaintProvider({ children }: { children: ReactNode }) {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch complaints from backend
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        setIsLoading(true);
        const data = await complaintsAPI.getAll();
        setComplaints(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch complaints');
        console.error('Error fetching complaints:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const addComplaint = async (data: Omit<Complaint, 'id' | 'status' | 'createdAt'>) => {
    try {
      const newComplaint = await complaintsAPI.create({
        ...data,
        status: 'Pending',
      });
      setComplaints((prev) => [newComplaint, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create complaint');
      console.error('Error creating complaint:', err);
    }
  };

  const updateStatus = async (id: string, status: ComplaintStatus) => {
    try {
      await complaintsAPI.update(id, { status });
      setComplaints((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status } : c))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update complaint');
      console.error('Error updating complaint:', err);
    }
  };

  const deleteComplaint = async (id: string) => {
    try {
      await complaintsAPI.delete(id);
      setComplaints((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete complaint');
      console.error('Error deleting complaint:', err);
    }
  };

  return (
    <ComplaintContext.Provider
      value={{
        complaints,
        addComplaint,
        updateStatus,
        deleteComplaint,
        isLoading,
        error,
      }}
    >
      {children}
    </ComplaintContext.Provider>
  );
}
```

### Step 4: Update AuthContext

In `frontend/src/context/AuthContext.tsx`:

```typescript
import { authAPI } from '@/services/api';

const login = async (email: string, password: string, role: UserRole) => {
  setIsLoading(true);
  try {
    // Call backend authentication
    const response = await authAPI.login(email, password);
    
    // Store auth data
    const authData = {
      email,
      name: response.name || email.split('@')[0],
      role,
      token: response.token, // Store JWT token
    };

    localStorage.setItem('auth_user', JSON.stringify(authData));
    localStorage.setItem('auth_token', response.token); // Store token separately

    setIsAuthenticated(true);
    setUserRole(role);
    setUserName(authData.name);
    setUserEmail(email);
  } catch (error) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};
```

### Step 5: Environment Configuration

Create `frontend/.env.local`:

```
VITE_API_URL=http://localhost:5000/api
```

### Step 6: Update API Service with Auth Token

In `frontend/src/services/api.ts`:

```typescript
async function apiCall<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: unknown
): Promise<T> {
  const token = localStorage.getItem('auth_token');
  
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    },
  };

  // Rest of the function...
}
```

## 🛡️ CORS Configuration

In `backend/src/index.js`, ensure CORS is properly configured:

```javascript
import cors from 'cors';

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200,
}));
```

## 🧪 Testing Integration

### 1. Start Backend
```bash
cd backend
npm run dev
```

### 2. Start Frontend
```bash
cd frontend
npm run dev
```

### 3. Open Developer Tools
In the browser, open **F12 → Network tab**

### 4. Perform an Action
- Login
- Create a complaint
- Update complaint status

### 5. Check Network Requests
You should see API calls to:
- `http://localhost:5000/api/auth/login`
- `http://localhost:5000/api/complaints`
- etc.

## 🔍 Common Integration Issues

### Issue 1: CORS Error
**Solution:** Ensure backend has CORS enabled:
```javascript
app.use(cors({
  origin: 'http://localhost:5173',
}));
```

### Issue 2: 404 Endpoint Not Found
**Solution:** Verify the backend route is implemented:
```bash
curl http://localhost:5000/api/health
```

### Issue 3: Auth Token Not Sent
**Solution:** Verify localStorage is used correctly and headers include token:
```javascript
headers: {
  'Authorization': `Bearer ${token}`
}
```

### Issue 4: Empty Data in Frontend
**Solution:** Check browser console for errors and backend logs:
```bash
# Backend should show request logs
POST /api/complaints 200 25ms
```

## 📝 Migration Checklist

- [ ] Backend API is running (`http://localhost:5000`)
- [ ] Create `api.ts` service file
- [ ] Update `ComplaintContext.tsx` to use API
- [ ] Update `AuthContext.tsx` to use API
- [ ] Add CORS config to backend
- [ ] Test login with API
- [ ] Test create complaint with API
- [ ] Test update complaint status with API
- [ ] Test delete complaint with API
- [ ] Remove mock data from frontend
- [ ] Test with real backend data
- [ ] Implement error handling
- [ ] Add loading states to UI

## 🚀 After Integration

Once integrated:

1. **Remove Mock Data:** Delete sample complaints from frontend
2. **Update UI:** Add loading spinners while fetching
3. **Error Handling:** Show error messages to users
4. **Implement More Features:** Add search, filtering, pagination
5. **Add Backend Features:** Implement all CRUD operations
6. **Database Persistence:** Data now persists in MongoDB

## 📚 Backend API Endpoints (To Implement)

```javascript
// Complaints
GET    /api/complaints           // Get all complaints
POST   /api/complaints           // Create new complaint
GET    /api/complaints/:id       // Get complaint by ID
PUT    /api/complaints/:id       // Update complaint
DELETE /api/complaints/:id       // Delete complaint

// Authentication
POST   /api/auth/login           // User login
POST   /api/auth/register        // User registration
POST   /api/auth/logout          // User logout

// Users
GET    /api/users/:id            // Get user profile
PUT    /api/users/:id            // Update user profile
```

## 🎯 Next Steps

1. **Implement Backend Routes:** Create all endpoints
2. **Add Database Models:** Define Mongoose schemas
3. **Add Middleware:** Authentication, validation
4. **Test Thoroughly:** Unit and integration tests
5. **Deploy:** Host backend and frontend

## 📞 Questions?

- Check backend documentation: `backend/README.md`
- Check frontend documentation: `frontend/README.md`
- Review express.js docs: https://expressjs.com/
- Review React docs: https://react.dev/

---

Good luck with the integration! 🚀
