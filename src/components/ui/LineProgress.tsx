import React from "react";

type SegmentedLineProgressProps = {
  stage1?: number;
  stage2?: number;
  stage3?: number;
  className?: string;
};

export default function LineProgress({
  stage1 = 0,
  stage2 = 0,
  stage3 = 0,
  className = "",
}: SegmentedLineProgressProps) {
  const total = stage1 + stage2 + stage3;

  // Calculate percentages
  const stage1Percent = total > 0 ? (stage1 / total) * 100 : 0;
  const stage2Percent = total > 0 ? (stage2 / total) * 100 : 0;
  const stage3Percent = total > 0 ? (stage3 / total) * 100 : 0;

  return (
    <div
      className={`h-2 gap-2 flex rounded-full  overflow-hidden ${className}`}
    >
      {/* Stage 1 */}
      {stage1 > 0 && (
        <div
          className="h-full bg-[#1F7EAA] first:rounded-full"
          style={{ width: `${stage1Percent}%` }}
        />
      )}

      {/* Stage 2 */}
      {stage2 > 0 && (
        <div
          className="h-full bg-[#2FBDFF] rounded-full"
          style={{ width: `${stage2Percent}%` }}
        />
      )}

      {/* Stage 3 */}
      {stage3 > 0 && (
        <div
          className="h-full  bg-[#97DEFF] last:rounded-full"
          style={{ width: `${stage3Percent}%` }}
        />
      )}
    </div>
  );
}
