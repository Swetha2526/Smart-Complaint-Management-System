import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, PlusCircle, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/complaints", label: "Complaints", icon: FileText },
  { to: "/submit", label: "Submit Complaint", icon: PlusCircle },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userName, userRole, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-60 bg-sidebar text-sidebar-foreground flex flex-col z-30">
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <span className="font-semibold text-lg tracking-tight text-sidebar-primary-foreground">
          ComplaintDesk
        </span>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                active
                  ? "bg-sidebar-accent text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-primary-foreground"
              }`}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          );
        })}
      </nav>

      <div className="px-6 py-4 border-t border-sidebar-border space-y-4">
        <div className="text-xs">
          <p className="text-sidebar-foreground/60 mb-1">Logged in as:</p>
          <p className="font-semibold text-sidebar-primary-foreground mb-1">
            {userName}
          </p>
          <div className="inline-block px-2 py-1 rounded bg-sidebar-accent">
            <span className="text-xs font-medium text-sidebar-primary-foreground">
              {userRole ? userRole.charAt(0).toUpperCase() + userRole.slice(1) : "User"}
            </span>
          </div>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full justify-start text-sm"
        >
          <LogOut size={16} className="mr-2" />
          Logout
        </Button>
      </div>

      <div className="px-6 py-4 border-t border-sidebar-border text-xs text-[hsl(var(--sidebar-muted))]">
        © 2026 ComplaintDesk
      </div>
    </aside>
  );
}
