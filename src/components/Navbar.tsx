import { Menu, Settings } from "lucide-react";
import React from "react";
import {
  Home,
  CheckSquare,
  Upload,
  Star,
  Cpu,
  Target,
  Gauge,
  HelpCircle,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { manrope } from "@/utils/font";
import Image from "next/image";

const menuItems: Array<{
  icon: React.ReactNode;
  label: string;
  badge?: string;
}> = [
  { icon: <Home size={18} />, label: "Home" },
  { icon: <CheckSquare size={18} />, label: "Stages & Checklist" },
  { icon: <Upload size={18} />, label: "Upload Docs" },
  { icon: <Star size={18} />, label: "Preferred Vendors" },
  { icon: <Cpu size={18} />, label: "Tech Stack" },
  { icon: <Target size={18} />, label: "Targets" },
  { icon: <Gauge size={18} />, label: "Zee Sales Targets" },
  { icon: <Settings size={18} />, label: "MAI Settings" },
  { icon: <HelpCircle size={18} />, label: "Pending Questions", badge: "3" },
];
const sidebarVariants = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" as const },
  },
  exit: {
    x: -500,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" as const },
  },
};

const listVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="rounded-md border px-2.5 py-1.5 hover:bg-slate-50 border-neutral-300 cursor-pointer"
        >
          <Menu size={18} />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-full text-gray-500 p-2 hover:bg-slate-100 cursor-pointer">
          <Settings size={18} />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
            height={40}
            width={40}
            alt="Logo"
            className="rounded-full"
          />
        </div>
      </div>
      {/* Side Panel */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-40 pointer-events-auto">
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
              style={{ background: "#11455D" }}
              onClick={handleClose}
            />

            <motion.aside
              key="sidebar"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-0 h-full w-68 bg-gradient-to-b from-cyan-900 to-slate-900 text-white shadow-xl p-2"
            >
              <div className="flex items-center justify-between px-4 py-4">
                <div className=" gap-2">
                  <Image src="/logo.webp" height={150} width={150} alt="logo" />
                </div>
                <button
                  onClick={handleClose}
                  className="rounded p-1 hover:bg-white/10 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <motion.nav
                className="mt-2 px-2 flex flex-col gap-1"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {},
                  exit: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {menuItems.map((item) => (
                  <motion.button
                    key={item.label}
                    variants={listVariants}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                  >
                    <span className="flex items-center gap-3 opacity-90">
                      {item.icon}
                      <span
                        className={`${manrope} font-extralight md:text-[16px]`}
                      >
                        {" "}
                        {item.label}
                      </span>
                    </span>
                    {item.badge ? (
                      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-cyan-200 px-2 text-xs font-semibold text-gray-700">
                        {item.badge}
                      </span>
                    ) : null}
                  </motion.button>
                ))}
              </motion.nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
