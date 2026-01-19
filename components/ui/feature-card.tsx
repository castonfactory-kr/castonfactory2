import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export function FeatureCard({ number, title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-primary/10">
      <div className="mb-4 flex items-center gap-4">
        <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors duration-300">
          {number}
        </span>
        {Icon && <Icon className="h-8 w-8 text-secondary" />}
      </div>
      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
      <p className="text-gray-600 leading-relaxed word-break-keep">
        {description}
      </p>
    </div>
  );
}
