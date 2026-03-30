import { ComplaintStatus } from "@/types/complaint";

const statusConfig: Record<ComplaintStatus, { dotClass: string; badgeClass: string }> = {
  Pending: { dotClass: "dot-pending", badgeClass: "status-pending" },
  "In Progress": { dotClass: "dot-in-progress", badgeClass: "status-in-progress" },
  Resolved: { dotClass: "dot-resolved", badgeClass: "status-resolved" },
};

export default function StatusBadge({ status }: { status: ComplaintStatus }) {
  const { dotClass, badgeClass } = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
      {status}
    </span>
  );
}
