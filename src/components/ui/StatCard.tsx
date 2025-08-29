import React from "react";

type StatCardProps = {
  title: string;
  value: React.ReactNode;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border-px border-slate-200 bg-[#F6F7FB] p-5">
      <div className="mb-1 flex justify-center items-center text-center flex-col">
        <div className="space-y-4">
          <h2 className="text-sm text-[#455468] font-semibold">{title}</h2>
          <h4 className="text-2xl font-semibold text-slate-800">{value}</h4>
        </div>
      </div>
    </div>
  );
}
