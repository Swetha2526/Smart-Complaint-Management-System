import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, UserRole } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Mail, Lock, CheckCircle2 } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<UserRole>("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await login(formData.email, formData.password, activeTab);
      setSuccess(`Welcome! Redirecting as ${activeTab}...`);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 text-white rounded-lg p-3">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Complaint Resolution Hub
          </h1>
          <p className="text-slate-400">Sign in to your account</p>
        </div>

        <Card className="border-slate-700 bg-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Login</CardTitle>
            <CardDescription>
              Choose your role and enter your credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={(value) => {
                setActiveTab(value as UserRole);
                setError("");
                setSuccess("");
              }}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                <TabsTrigger
                  value="user"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  User Login
                </TabsTrigger>
                <TabsTrigger
                  value="admin"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Admin Login
                </TabsTrigger>
              </TabsList>

              <TabsContent value="user" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <Alert className="bg-red-900 border-red-700">
                      <AlertCircle className="h-4 w-4 text-red-200" />
                      <AlertDescription className="text-red-200">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}

                  {success && (
                    <Alert className="bg-green-900 border-green-700">
                      <CheckCircle2 className="h-4 w-4 text-green-200" />
                      <AlertDescription className="text-green-200">
                        {success}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="user-email" className="text-slate-200">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                      <Input
                        id="user-email"
                        type="email"
                        name="email"
                        placeholder="user@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-password" className="text-slate-200">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                      <Input
                        id="user-password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In as User"}
                  </Button>
                </form>

                <div className="mt-4 p-4 bg-slate-700 rounded-lg border border-slate-600">
                  <p className="text-sm text-slate-300 font-semibold mb-2">
                    Demo Credentials:
                  </p>
                  <p className="text-xs text-slate-400">
                    Email: user@example.com
                  </p>
                  <p className="text-xs text-slate-400">Password: password123</p>
                </div>
              </TabsContent>

              <TabsContent value="admin" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <Alert className="bg-red-900 border-red-700">
                      <AlertCircle className="h-4 w-4 text-red-200" />
                      <AlertDescription className="text-red-200">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}

                  {success && (
                    <Alert className="bg-green-900 border-green-700">
                      <CheckCircle2 className="h-4 w-4 text-green-200" />
                      <AlertDescription className="text-green-200">
                        {success}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-slate-200">
                      Admin Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                      <Input
                        id="admin-email"
                        type="email"
                        name="email"
                        placeholder="admin@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-slate-200">
                      Admin Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                      <Input
                        id="admin-password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In as Admin"}
                  </Button>
                </form>

                <div className="mt-4 p-4 bg-slate-700 rounded-lg border border-slate-600">
                  <p className="text-sm text-slate-300 font-semibold mb-2">
                    Demo Credentials:
                  </p>
                  <p className="text-xs text-slate-400">
                    Email: admin@example.com
                  </p>
                  <p className="text-xs text-slate-400">Password: admin123</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center text-slate-400 text-sm mt-6">
          Protected application • Demo credentials available above
        </p>
      </div>
    </div>
  );
};

export default Login;
