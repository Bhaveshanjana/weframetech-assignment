import Image from "next/image";
import React from "react";

const Highlight = () => {
  return (
    <div className="flex flex-col gap-6 mx-2 md:mx-0">
      {/* Card 1 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
        <h2 className="text-sm font-semibold md:text-[16px]">
          Key Insights & Feedback
        </h2>
        <div className="mt-2 rounded-xl flex-1">
          <div className="border-b border-[#E9EFF6] pb-2 text-xs font-semibold text-black flex justify-between">
            <div className="flex flex-col">
              <span className="text-2xl">10%</span>
              <span className="text-[#455468] font-semibold">Sales Growth</span>
            </div>
            <div className="flex justify-center items-center flex-col -mt-2 gap-1 rounded-full text-xs font-semibold text-sky-700">
              <Image
                alt="top-performer"
                height={35}
                width={35}
                src="/top-performer.png"
              />
              <span className="text-[#279DD4] bg-[#D5F2FF80] rounded-full p-1 border border-[#BAE9FF]">
                Top Performer
              </span>
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-[#F6F7FB] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold">Feedback</span>
            </div>
            <div className="flex justify-center items-center  gap-2">
              <div className="h-3 w-3 -translate-y-2 rounded-full border border-slate-300 bg-[#D9D9D9]" />
              <span className="text-[#455468] font-semibold text-[12px]">
                Franchisees are requesting more detailed training materials.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
        <div className="text-sm font-semibold md:text-[16px]">
          Prospect Leads
        </div>
        <div className="mt-7 space-y-3 flex-1">
          {[
            { name: "Wade Warren", img: "/feedback-img/feedback-img01.png" },
            { name: "Ava Wright", img: "/feedback-img/feedback-img02.png" },
            { name: "Cody Fisher", img: "/feedback-img/feedback-img03.png" },
          ].map((person) => (
            <div
              key={person.name}
              className="flex items-center justify-between rounded-xl  bg-[#F6F7FB] p-3"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={person.img}
                  alt={person.name}
                  height={100}
                  width={100}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-[#101828]">
                    {person.name}
                  </div>
                </div>
              </div>
              <div className="text-[14px] font-semibold">
                <span className="text-[#475467]">Stage: </span>
                <span>Initial Inquiry</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
