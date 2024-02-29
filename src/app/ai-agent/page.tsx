import TagsList from "@/components/tagsList";
import DashboardLayout from "../layout/dashboardLayout";

export default function AiAgent() {
  const tags = ["Software Developer", "Remote", "Internship"];

  return (
    <DashboardLayout>
      <h1 className="mb-4">AI Agents</h1>
      <div className="flex justify-end mb-4">
        <button className="bg-black color white rounded-lg text-white px-4 py-2">
          <a href="/ai-agent/create">Create AI Agent</a>
        </button>
      </div>
      <div className="border border-border-color rounded-lg p-4 flex justify-between items-center">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold leading-none">Jane Appleseed</h3>
            </div>
          </div>
          <TagsList tags={tags} />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Created on March 10, 2023
          </p>
        </div>
        <div className="flex justify-end items-center text-center text-sm">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold text-lg">5</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Job Applications Sent
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
