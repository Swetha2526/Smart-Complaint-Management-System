import { useComplaints } from "@/context/ComplaintContext";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";
import { FileText, Clock, Loader, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { complaints } = useComplaints();

  const total = complaints.length;
  const pending = complaints.filter((c) => c.status === "Pending").length;
  const inProgress = complaints.filter((c) => c.status === "In Progress").length;
  const resolved = complaints.filter((c) => c.status === "Resolved").length;
  const recent = complaints.slice(0, 5);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
      <h1 className="text-xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Complaints" value={total} icon={FileText} accent="#2563EB" />
        <StatCard label="Pending" value={pending} icon={Clock} accent="#EF4444" />
        <StatCard label="In Progress" value={inProgress} icon={Loader} accent="#F59E0B" />
        <StatCard label="Resolved" value={resolved} icon={CheckCircle} accent="#10B981" />
      </div>

      <div className="bg-card border border-border rounded-md">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold">Recent Complaints</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="text-left px-5 py-3 font-medium">ID</th>
                <th className="text-left px-5 py-3 font-medium">Name</th>
                <th className="text-left px-5 py-3 font-medium">Category</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
                <th className="text-left px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((c) => (
                <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors duration-150">
                  <td className="px-5 py-3 font-medium">{c.id}</td>
                  <td className="px-5 py-3">{c.name}</td>
                  <td className="px-5 py-3">{c.category}</td>
                  <td className="px-5 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-5 py-3 text-muted-foreground">{new Date(c.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
