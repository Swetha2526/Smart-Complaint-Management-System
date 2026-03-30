import { createContext, useContext, useState, ReactNode } from "react";
import { Complaint, ComplaintStatus } from "@/types/complaint";

interface ComplaintContextType {
  complaints: Complaint[];
  addComplaint: (complaint: Omit<Complaint, "id" | "status" | "createdAt">) => void;
  updateStatus: (id: string, status: ComplaintStatus) => void;
  deleteComplaint: (id: string) => void;
}

const ComplaintContext = createContext<ComplaintContextType | undefined>(undefined);

const sampleComplaints: Complaint[] = [
  {
    id: "CMP-001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    category: "Billing",
    description: "I was charged twice for my subscription last month. Need a refund for the duplicate payment.",
    status: "Pending",
    createdAt: "2026-03-15T10:30:00Z",
  },
  {
    id: "CMP-002",
    name: "Priya Patel",
    email: "priya@example.com",
    category: "Technical Issue",
    description: "The application crashes every time I try to upload a file larger than 5MB.",
    status: "In Progress",
    createdAt: "2026-03-14T08:15:00Z",
  },
  {
    id: "CMP-003",
    name: "Amit Kumar",
    email: "amit@example.com",
    category: "Service Quality",
    description: "Response time from the support team has been over 48 hours consistently.",
    status: "Resolved",
    createdAt: "2026-03-12T14:00:00Z",
  },
];

let nextId = 4;

export function ComplaintProvider({ children }: { children: ReactNode }) {
  const [complaints, setComplaints] = useState<Complaint[]>(sampleComplaints);

  const addComplaint = (data: Omit<Complaint, "id" | "status" | "createdAt">) => {
    const newComplaint: Complaint = {
      ...data,
      id: `CMP-${String(nextId++).padStart(3, "0")}`,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };
    setComplaints((prev) => [newComplaint, ...prev]);
  };

  const updateStatus = (id: string, status: ComplaintStatus) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );
  };

  const deleteComplaint = (id: string) => {
    setComplaints((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <ComplaintContext.Provider value={{ complaints, addComplaint, updateStatus, deleteComplaint }}>
      {children}
    </ComplaintContext.Provider>
  );
}

export function useComplaints() {
  const ctx = useContext(ComplaintContext);
  if (!ctx) throw new Error("useComplaints must be used within ComplaintProvider");
  return ctx;
}
