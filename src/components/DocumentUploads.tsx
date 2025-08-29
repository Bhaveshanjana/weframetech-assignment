import React, { useState } from "react";
import { ChevronDown, ListFilter, MoreHorizontal, Search } from "lucide-react";

interface Document {
  id: string;
  name: string;
  size: string;
  type: "PDF" | "DOC";
  category: "Legal" | "Vendors & Assets" | "Technology" | "Financial";
  aiAppInclusion: boolean;
  dashboardInclusion: boolean;
  stageAccess: "Full" | "Onboarding" | "Franchisee" | "Prospect";
}

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Tech requirements.pdf",
    size: "200 KB",
    type: "PDF",
    category: "Legal",
    aiAppInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Full",
  },
  {
    id: "2",
    name: "Dashboard screenshot.jpg",
    size: "720 KB",
    type: "PDF",
    category: "Vendors & Assets",
    aiAppInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Onboarding",
  },
  {
    id: "3",
    name: "Dashboard prototype recording.mp4",
    size: "16 MB",
    type: "DOC",
    category: "Technology",
    aiAppInclusion: false,
    dashboardInclusion: true,
    stageAccess: "Franchisee",
  },
  {
    id: "4",
    name: "Financial Overview",
    size: "4.2 MB",
    type: "DOC",
    category: "Financial",
    aiAppInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Prospect",
  },
  {
    id: "5",
    name: "UX Design Guidelines.docx",
    size: "400 KB",
    type: "DOC",
    category: "Legal",
    aiAppInclusion: true,
    dashboardInclusion: false,
    stageAccess: "Onboarding",
  },
  {
    id: "6",
    name: "Dashboard interaction.aep",
    size: "12 MB",
    type: "PDF",
    category: "Legal",
    aiAppInclusion: true,
    dashboardInclusion: true,
    stageAccess: "Onboarding",
  },
  {
    id: "7",
    name: "Briefing call recording.mp3",
    size: "18.6 MB",
    type: "PDF",
    category: "Financial",
    aiAppInclusion: false,
    dashboardInclusion: false,
    stageAccess: "Prospect",
  },
];

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  const getColorClasses = (cat: string) => {
    switch (cat) {
      case "Legal":
        return "bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF]";
      case "Vendors & Assets":
        return "bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]";
      case "Technology":
        return "bg-[#FEF6EE] text-[#B93815] border border-[#F9DBAF]";
      case "Financial":
        return "bg-[#FDF2FA] text-[#C11574] border border-[#FCCEEE]";
      default:
        return "bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF]";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorClasses(
        category
      )}`}
    >
      {category}
    </span>
  );
};

const FileTypeIcon: React.FC<{ type: string; index: number }> = ({
  type,
  index,
}) => {
  const shouldShowVideo =
    (type === "PDF" && (index < 2 || (index >= 5 && index < 7))) ||
    (type === "DOC" && index >= 2 && index < 5);

  if (shouldShowVideo) {
    const videoSrc =
      type === "PDF" ? "/icons/pdf-file.mp4" : "/icons/doc-file.mp4";

    return (
      <video
        src={videoSrc}
        muted
        playsInline
        autoPlay
        loop
        className="w-10 h-10"
      />
    );
  }

  // fallback circle
  const getIconClasses = (fileType: string) => {
    switch (fileType) {
      case "PDF":
        return "bg-red-500";
      case "DOC":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return <div className={`w-9 h-9 rounded-full ${getIconClasses(type)}`} />;
};

const Toggle: React.FC<{
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}> = ({ enabled, onChange }) => {
  return (
    <button
      type="button"
      className={`${
        enabled ? "bg-[#2FBDFF]" : "bg-[#E9EFF6]"
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      onClick={() => onChange(!enabled)}
    >
      <span
        className={`${
          enabled ? "translate-x-5" : "translate-x-0"
        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      />
    </button>
  );
};

export default function DocumentUploads() {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);

  const updateDocument = <K extends keyof Document>(
    id: string,
    field: K,
    value: Document[K]
  ) => {
    setDocuments((docs) =>
      docs.map((doc) => (doc.id === id ? { ...doc, [field]: value } : doc))
    );
  };
  return (
    <>
      <div className="hidden md:block max-w-7xl rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-[#E9EFF6] mx-auto bg-white">
        {" "}
        {/* Header */}{" "}
        <div className="flex items-center justify-between mb-6 px-6 mt-6">
          {" "}
          <div>
            {" "}
            <h1 className="text-2xl font-semibold">My Uploads</h1>{" "}
            <p className="text-sm text-[#455468] font-semibold mt-1">
              {" "}
              Documents that are uploaded by you.{" "}
            </p>{" "}
          </div>{" "}
          <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
            {" "}
            <MoreHorizontal className="w-5 h-5 rotate-90" />{" "}
          </button>{" "}
        </div>{" "}
        {/* Filter */}{" "}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap px-6 border-t border-[#E9EFF6] pt-3">
          {" "}
          <div className="relative flex-1 max-w-md min-w-[200px]">
            {" "}
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />{" "}
            <input
              type="text"
              placeholder="Search here.."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-[#455468]"
            />{" "}
          </div>{" "}
          <button className="flex items-center gap-2 px-4 py-2 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
            {" "}
            <ListFilter className="w-5 h-5" /> Filters{" "}
          </button>{" "}
        </div>{" "}
        {/* Table */}{" "}
        <div className="border-px border-gray-200 overflow-x-auto min-w-[800px] rounded-b-2xl">
          {" "}
          {/*Tabel Header */}{" "}
          <div className="bg-gray-50 px-6 py-3 border-y border-[#E9EFF6] ">
            {" "}
            <div className="grid grid-cols-13 items-center text-sm font-medium text-[#475467]">
              {" "}
              <div className="col-span-1">
                {" "}
                <div className="rounded-md w-5 h-5 border border-[#D0D5DD] bg-white cursor-pointer" />{" "}
              </div>{" "}
              <div className="col-span-3 -ml-15">Document Name</div>{" "}
              <div className="col-span-2">Document Type</div>{" "}
              <div className="col-span-2">AI App Inclusion</div>{" "}
              <div className="col-span-2">Dashboard Inclusion</div>{" "}
              <div className="col-span-1">Stage Access</div>{" "}
              <div className="col-span-1"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="divide-y divide-gray-200 min-w-[800px]">
            {" "}
            {documents.map((doc, index) => (
              <div key={doc.id} className="px-6 py-4 hover:bg-gray-50">
                {" "}
                <div className="grid grid-cols-13 items-center">
                  {" "}
                  <div className="col-span-1">
                    {" "}
                    <div className="rounded-md w-5 h-5 border border-[#D0D5DD] bg-white cursor-pointer" />{" "}
                  </div>{" "}
                  {/* Document Name */}{" "}
                  <div className="col-span-3 flex items-center gap-2 -ml-17">
                    {" "}
                    <FileTypeIcon type={doc.type} index={index} />{" "}
                    <div>
                      {" "}
                      <div className="font-medium text-gray-900">
                        {doc.name}
                      </div>{" "}
                      <div className="text-sm text-[#475467]">{doc.size}</div>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* Document Type */}{" "}
                  <div className="col-span-2">
                    {" "}
                    <CategoryBadge category={doc.category} />{" "}
                  </div>{" "}
                  {/* AI App Inclusion */}{" "}
                  <div className="col-span-2">
                    {" "}
                    <Toggle
                      enabled={doc.aiAppInclusion}
                      onChange={(enabled) =>
                        updateDocument(doc.id, "aiAppInclusion", enabled)
                      }
                    />{" "}
                  </div>{" "}
                  {/* Dashboard Inclusion */}{" "}
                  <div className="col-span-2">
                    {" "}
                    <Toggle
                      enabled={doc.dashboardInclusion}
                      onChange={(enabled) =>
                        updateDocument(doc.id, "dashboardInclusion", enabled)
                      }
                    />{" "}
                  </div>{" "}
                  {/* Stage Access */}{" "}
                  <div className="col-span-1 text-sm text-gray-700 ">
                    {" "}
                    <button
                      type="button"
                      className="flex items-center justify-between w-32 px-3 py-2 text-sm text-[#455468] font-semibold bg-[#FFFFFF] border border-[#D7DFE9] rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      {" "}
                      {
                        doc.stageAccess
                      } <ChevronDown className="w-4 h-4 ml-2" />{" "}
                    </button>{" "}
                  </div>{" "}
                  {/* Actions */}{" "}
                  <div className="col-span-1 flex items-center gap-2 justify-end translate-x-18">
                    {" "}
                    <button className="text-sm text-[#475467] hover:text-red-800 cursor-pointer">
                      {" "}
                      Delete{" "}
                    </button>{" "}
                    <button className="text-sm text-[#279DD4] hover:text-blue-800 cursor-pointer">
                      {" "}
                      Edit{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>

      {/* Mobile Card */}
      <div className="md:hidden mx-2 md:mx-0 divide-y divide-gray-200 rounded-2xl border-t border-[#E9EFF6] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
        {documents.map((doc, index) => (
          <div key={doc.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <FileTypeIcon type={doc.type} index={index} />
              <div>
                <div className="font-medium text-gray-900">{doc.name}</div>
                <div className="text-xs text-[#475467]">{doc.size}</div>
              </div>
            </div>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Document Type:</span>
                <CategoryBadge category={doc.category} />
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">AI App Inclusion:</span>
                <Toggle
                  enabled={doc.aiAppInclusion}
                  onChange={(enabled) =>
                    updateDocument(doc.id, "aiAppInclusion", enabled)
                  }
                />
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Dashboard Inclusion:</span>
                <Toggle
                  enabled={doc.dashboardInclusion}
                  onChange={(enabled) =>
                    updateDocument(doc.id, "dashboardInclusion", enabled)
                  }
                />
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Stage Access:</span>
                <span>{doc.stageAccess}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-3">
              <button className="text-sm text-[#475467] hover:text-red-800 cursor-pointer">
                Delete
              </button>
              <button className="text-sm text-[#279DD4] hover:text-blue-800 cursor-pointer">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
