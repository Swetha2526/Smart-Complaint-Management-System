export type ComplaintStatus = "Pending" | "In Progress" | "Resolved";

export type ComplaintCategory =
  | "Service Quality"
  | "Billing"
  | "Technical Issue"
  | "Staff Behavior"
  | "Delivery"
  | "Other";

export interface Complaint {
  id: string;
  name: string;
  email: string;
  category: ComplaintCategory;
  description: string;
  status: ComplaintStatus;
  createdAt: string;
}
