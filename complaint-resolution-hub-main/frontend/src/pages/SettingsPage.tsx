import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useProfile } from "@/context/ProfileContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sun,
  Moon,
  Monitor,
  User,
  Bell,
  Globe,
  Shield,
  Download,
  LogOut,
  Save,
} from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { profile, updateProfile, logout } = useProfile();
  const navigate = useNavigate();

  const [editProfile, setEditProfile] = useState({ ...profile });
  const [notifications, setNotifications] = useState({
    email: true,
    statusUpdate: true,
    newComplaint: false,
    weeklyReport: true,
  });
  const [language, setLanguage] = useState("en");
  const [autoDeleteResolved, setAutoDeleteResolved] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  const handleSaveProfile = () => {
    if (!editProfile.name.trim() || !editProfile.email.trim()) {
      toast.error("Name and email are required");
      return;
    }
    updateProfile(editProfile);
    toast.success("Profile updated successfully");
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleExportData = () => {
    toast.success("Complaint data exported as CSV");
  };

  const themeOptions = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="max-w-[700px]"
    >
      <h1 className="text-xl font-semibold mb-6">Settings</h1>

      <div className="space-y-6">
        {/* Appearance */}
        <section className="bg-card border border-border rounded-md p-5">
          <div className="flex items-center gap-2 mb-4">
            <Sun size={18} className="text-accent" />
            <h2 className="text-sm font-semibold">Appearance</h2>
          </div>
          <div className="flex items-center gap-3">
            {themeOptions.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setTheme(value)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md border text-sm font-medium transition-colors duration-150 ${
                  theme === value
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent/50"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Profile */}
        <section className="bg-card border border-border rounded-md p-5">
          <div className="flex items-center gap-2 mb-4">
            <User size={18} className="text-accent" />
            <h2 className="text-sm font-semibold">Profile</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="pname">Full Name</Label>
              <Input
                id="pname"
                value={editProfile.name}
                onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pemail">Email</Label>
              <Input
                id="pemail"
                type="email"
                value={editProfile.email}
                onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pphone">Phone</Label>
              <Input
                id="pphone"
                value={editProfile.phone}
                onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pdept">Department</Label>
              <Input
                id="pdept"
                value={editProfile.department}
                onChange={(e) => setEditProfile({ ...editProfile, department: e.target.value })}
              />
            </div>
          </div>
          <Button
            onClick={handleSaveProfile}
            className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Save size={14} className="mr-2" />
            Save Profile
          </Button>
        </section>

        {/* Notifications */}
        <section className="bg-card border border-border rounded-md p-5">
          <div className="flex items-center gap-2 mb-4">
            <Bell size={18} className="text-accent" />
            <h2 className="text-sm font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { key: "email" as const, label: "Email Notifications", desc: "Receive email for important updates" },
              { key: "statusUpdate" as const, label: "Status Updates", desc: "Notify when complaint status changes" },
              { key: "newComplaint" as const, label: "New Complaint Alerts", desc: "Alert on new complaints submitted" },
              { key: "weeklyReport" as const, label: "Weekly Report", desc: "Receive weekly summary digest" },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
                <Switch
                  checked={notifications[key]}
                  onCheckedChange={(val) => setNotifications({ ...notifications, [key]: val })}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Language */}
        <section className="bg-card border border-border rounded-md p-5">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={18} className="text-accent" />
            <h2 className="text-sm font-semibold">Language & Region</h2>
          </div>
          <div className="space-y-1.5 max-w-xs">
            <Label>Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Security */}
        <section className="bg-card border border-border rounded-md p-5">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} className="text-accent" />
            <h2 className="text-sm font-semibold">Security & Privacy</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Auto-Delete Resolved Complaints</p>
                <p className="text-xs text-muted-foreground">Automatically remove resolved complaints after 30 days</p>
              </div>
              <Switch checked={autoDeleteResolved} onCheckedChange={setAutoDeleteResolved} />
            </div>
          </div>
        </section>

        {/* Data */}
        <section className="bg-card border border-border rounded-md p-5">
          <div className="flex items-center gap-2 mb-4">
            <Download size={18} className="text-accent" />
            <h2 className="text-sm font-semibold">Data Management</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Export all complaint data as a CSV file for offline analysis.
          </p>
          <Button variant="outline" onClick={handleExportData}>
            <Download size={14} className="mr-2" />
            Export Complaints
          </Button>
        </section>

        <Separator />

        {/* Logout */}
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="w-full"
        >
          <LogOut size={14} className="mr-2" />
          Log Out
        </Button>
      </div>
    </motion.div>
  );
}
