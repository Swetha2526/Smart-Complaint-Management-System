import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  accent?: string;
}

export default function StatCard({ label, value, icon: Icon, accent }: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-md p-5 flex items-center gap-4">
      <div
        className="w-10 h-10 rounded-md flex items-center justify-center"
        style={{ backgroundColor: accent ? `${accent}15` : undefined, color: accent }}
      >
        <Icon size={20} />
      </div>
      <div>
        <p className="text-2xl font-semibold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
