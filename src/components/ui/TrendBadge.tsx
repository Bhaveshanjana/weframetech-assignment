import { TrendingUp } from "lucide-react";
import React from "react";

type TrendBadgeProps = {
  value: string;
};

export default function TrendBadge({ value }: TrendBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1 mt-1 rounded-full px-2 py-0.5 text-xs font-bold 
       border-2 border-[#079455] text-[#079455]"
    >
      <TrendingUp className="w-3 h-3 mt-0.5" />
      {value}
    </span>
  );
}
