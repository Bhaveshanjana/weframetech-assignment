import React from "react";
import StatCard from "./ui/StatCard";
import TrendBadge from "./ui/TrendBadge";
import LineProgress from "./ui/LineProgress";
import AvatarGroup from "./ui/AvatarGroup";

const Franchisees = () => {
  return (
    <div className="flex flex-col gap-6 mx-2 md:mx-0">
      {/* Card 1 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ">
        <h2 className="text-sm font-semibold text-[#1C222B] md:text-[16px]">
          Total Franchisees Onboard
        </h2>
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 ">
            <span className="text-xl md:text-3xl font-bold text-[#101828]">
              14
            </span>
            <span className="ml-2">
              <TrendBadge value="7.4%" />
            </span>
          </div>
          <AvatarGroup count={12} />
        </div>

        <div className="mt-6 space-y-4 flex-1">
          <div>
            <LineProgress stage1={4} stage2={3} stage3={6} />
            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-semibold text-[#455468]">
                <span className="h-2 w-2 rounded-full bg-[#1F7EAA]" />
                Stage 1 (Initial Inquiry)
              </span>
              <span className="font-semibold text-[15px]">02</span>
            </div>
          </div>

          <div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-semibold text-[#455468] ">
                <span className="h-2 w-2 rounded-full bg-[#2FBDFF] " />
                Stage 2 (Document Submission)
              </span>
              <span className="font-semibold text-[15px]">07</span>
            </div>
          </div>

          <div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-semibold text-[#455468]">
                <span className="h-2 w-2 rounded-full bg-[#97DEFF]" />
                Stage 3 (Training)
              </span>
              <span className="font-semibold text-[15px]">05</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl border divide-y divide-[#E9EFF6] border-slate-200 bg-white p-6 flex flex-col shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between pb-4">
          <div>
            <div className="text-sm font-semibold text-[#1C222B] md:text-[16px]">
              <span>Financial Wellbeing</span>
            </div>
            <div className="flex flex-col">
              <span className="mt-2 text-3xl font-bold text-slate-800">20</span>
              <span className="text-xs text-[#455468] font-semibold">
                Total Franchisees
              </span>
            </div>
          </div>
          <span className="mt-7">
            <TrendBadge value="2.1%" />
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 flex-1 ">
          <StatCard title="Target" value="$500,000" />
          <StatCard title="Current" value="$450,000" />
        </div>
      </div>
    </div>
  );
};

export default Franchisees;
