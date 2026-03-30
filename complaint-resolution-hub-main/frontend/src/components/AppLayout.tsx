import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 ml-60 p-8">
        <Outlet />
      </main>
    </div>
  );
}
