"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Account from "@/components/Account";
import Franchisees from "@/components/Franchisees";
import Highlight from "@/components/Highlight";
import DocumentUploads from "@/components/DocumentUploads";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-12">
      {/* NavBar*/}
      <Navbar />
      {/* Content */}
      <main className="mx-auto max-w-7xl  py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Account Progress section */}
          <Account />

          {/* Franchisees section */}
          <Franchisees />
          {/* Hilight section */}
          <Highlight />
        </div>
      </main>
      <DocumentUploads />
    </div>
  );
}
