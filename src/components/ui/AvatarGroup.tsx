import Image from "next/image";
import React from "react";

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
];
type AvatarProps = {
  src?: string;
  initials?: string;
  className?: string;
};

function Avatar({ src, initials, className = "" }: AvatarProps) {
  return (
    <div
      className={`w-2 h-2 rounded-full bg-slate-300 flex items-center justify-center text-sm font-medium text-slate-600 overflow-hidden ${className}`}
    >
      {src ? (
        <Image src={src} width={100} height={100} alt="avatar" className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

type AvatarGroupProps = {
  count: number;
  maxVisible?: number;
  size?: "sm";
  className?: string;
};

export default function AvatarGroup({
  count,
  maxVisible = 5,
  size = "sm",
  className = "",
}: AvatarGroupProps) {
  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
  };

  const visibleCount = Math.min(count, maxVisible);
  const overflowCount = count - visibleCount;

  const visibleAvatars = Array.from({ length: visibleCount }, (_, index) => {
    const avatarIndex = index % avatars.length;
    return avatars[avatarIndex];
  });

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex -space-x-2">
        {visibleAvatars.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.src}
            className={`border-2 -mr-2 border-white ${sizeClasses[size]}`}
          />
        ))}
      </div>
      {overflowCount > 0 && (
        <div
          className={`rounded-full  bg-slate-100 flex items-center justify-center font-bold text-slate-600 border border-gray-200 ${sizeClasses[size]}`}
        >
          +{overflowCount}
        </div>
      )}
    </div>
  );
}
