import { useState } from "react";
import { useComplaints } from "@/context/ComplaintContext";
import { ComplaintCategory } from "@/types/complaint";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categories: ComplaintCategory[] = [
  "Service Quality",
  "Billing",
  "Technical Issue",
  "Staff Behavior",
  "Delivery",
  "Other",
];

export default function SubmitComplaint() {
  const { addComplaint } = useComplaints();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "" as ComplaintCategory | "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.category || !form.description) {
      toast.error("Please fill in all fields");
      return;
    }
    addComplaint({
      name: form.name.trim(),
      email: form.email.trim(),
      category: form.category as ComplaintCategory,
      description: form.description.trim(),
    });
    toast.success("Complaint submitted successfully!");
    navigate("/complaints");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="max-w-[600px] mx-auto"
    >
      <h1 className="text-xl font-semibold mb-6">Submit a Complaint</h1>

      <div className="bg-card border border-border rounded-md p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <Label>Category</Label>
            <Select
              value={form.category}
              onValueChange={(val) => setForm({ ...form, category: val as ComplaintCategory })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              placeholder="Describe your complaint in detail..."
              rows={5}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Submit Complaint
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
