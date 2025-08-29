import { Check } from "lucide-react";
import React from "react";
import CircularProgress from "./ui/CircularProgress";

const Account = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 mx-2 md:mx-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
      <div className="text-center text-sm font-semibold text-[#1C222B] md:text-[16px]">
        Account Progress
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="relative">
          <CircularProgress value={85} />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 border-t border-[#D0D5DD] pt-4">
        <div className="rounded-xl bg-[#F6F7FB] p-4">
          <div className="text-sm font-semibold text-[#1C222B]">
            Steps Completed
          </div>
          <ul className="mt-3 space-y-3 text-sm">
            {["Profile Setup", "Initial Training", "Legal Documents"].map(
              (t) => (
                <li key={t} className="flex items-center justify-between">
                  <div className="flex justify-center items-center gap-2">
                    <div className="h-2 w-2 rounded-full border border-slate-300 bg-[#D9D9D9]" />
                    <span className="text-[#455468] font-semibold">{t}</span>
                  </div>
                  <div className="h-4 w-4 flex justify-center items-center rounded-full bg-[#0A9952] text-white text-center">
                    <Check className="h-3 w-3 mt-0.5" />
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="rounded-xl bg-[#F6F7FB] p-4">
          <div className="text-sm font-semibold text-[#1C222B]">
            Steps Remaining
          </div>
          <ul className="mt-3 space-y-3 text-sm">
            {["Financial Integration", "Final Review"].map((t) => (
              <li key={t} className="flex items-center justify-between">
                <div className="flex justify-center items-center gap-2">
                  <div className="h-2 w-2 rounded-full border border-slate-300 bg-[#D9D9D9]" />
                  <span className="text-[#455468] font-semibold">{t}</span>
                </div>
                <div className="h-4 w-4 flex justify-center items-center rounded-full bg-[#0A995240] text-white text-center">
                  <Check className="h-3 w-3 mt-0.5" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
