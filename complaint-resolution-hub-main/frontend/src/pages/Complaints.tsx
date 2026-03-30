import { useState } from "react";
import { useComplaints } from "@/context/ComplaintContext";
import StatusBadge from "@/components/StatusBadge";
import { ComplaintStatus } from "@/types/complaint";
import { Trash2, Search, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const statuses: ComplaintStatus[] = ["Pending", "In Progress", "Resolved"];

export default function Complaints() {
  const navigate = useNavigate();
  const { complaints, updateStatus, deleteComplaint } = useComplaints();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = complaints.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const selected = complaints.find((c) => c.id === selectedId);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">All Complaints</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{filtered.length} complaint{filtered.length !== 1 && "s"}</span>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => navigate("/submit")}>
            <PlusCircle size={16} className="mr-2" />
            Raise Complaint
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, ID, or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {statuses.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="bg-card border border-border rounded-md overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-card z-10">
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left px-5 py-3 font-medium">ID</th>
              <th className="text-left px-5 py-3 font-medium">Name</th>
              <th className="text-left px-5 py-3 font-medium">Category</th>
              <th className="text-left px-5 py-3 font-medium">Description</th>
              <th className="text-left px-5 py-3 font-medium">Status</th>
              <th className="text-left px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors duration-150">
                <td className="px-5 py-3 font-medium">{c.id}</td>
                <td className="px-5 py-3">{c.name}</td>
                <td className="px-5 py-3">{c.category}</td>
                <td className="px-5 py-3 max-w-[200px]">
                  <span className="truncate block">{c.description}</span>
                  <button
                    onClick={() => setSelectedId(c.id)}
                    className="text-xs text-accent hover:underline mt-0.5"
                  >
                    View Details
                  </button>
                </td>
                <td className="px-5 py-3">
                  <Select
                    value={c.status}
                    onValueChange={(val) => {
                      updateStatus(c.id, val as ComplaintStatus);
                      toast.success(`${c.id} updated to ${val}`);
                    }}
                  >
                    <SelectTrigger className="w-36 h-8 text-xs">
                      <StatusBadge status={c.status} />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="px-5 py-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => {
                      deleteComplaint(c.id);
                      toast.success(`${c.id} deleted`);
                    }}
                  >
                    <Trash2 size={15} />
                  </Button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-muted-foreground">
                  No complaints found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelectedId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complaint {selected?.id}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-3 text-sm">
              <div><span className="font-medium">Name:</span> {selected.name}</div>
              <div><span className="font-medium">Email:</span> {selected.email}</div>
              <div><span className="font-medium">Category:</span> {selected.category}</div>
              <div><span className="font-medium">Status:</span> <StatusBadge status={selected.status} /></div>
              <div><span className="font-medium">Date:</span> {new Date(selected.createdAt).toLocaleString()}</div>
              <div>
                <span className="font-medium">Description:</span>
                <p className="mt-1 text-muted-foreground">{selected.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
