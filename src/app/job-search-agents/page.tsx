import Link from "next/link";
import DashboardLayout from "../layout/dashboardLayout";

export default function AiAgent() {
  const agents = [
    {
      role: "Software Developer",
      type: "Remote",
      level: "Full-time",
      salaryRange: "$50,000 - $60,000",
      companyType: "Startup",
      applicationsSent: 5,
      totalApplications: 10,
      createdOn: "March 9, 2023",
    },
    {
      role: "Solidity Developer",
      type: "Remote",
      level: "Internship",
      salaryRange: "$60,000 - $70,000",
      companyType: "Large Enterprises",
      applicationsSent: 10,
      totalApplications: 20,
      createdOn: "March 10, 2023",
    },
    {
      role: "Software Developer",
      type: "Remote",
      level: "Full-time",
      salaryRange: "$50,000 - $60,000",
      companyType: "Startup",
      applicationsSent: 5,
      totalApplications: 10,
      createdOn: "March 15, 2023",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="mb-4">AI Agents</h1>
      <div className="flex justify-end mb-4">
        <button className="bg-black text-white rounded-lg px-4 py-2">
          <Link href="/job-search-agents/create">Create AI Agent</Link>
        </button>
      </div>
      {agents.map((agent, index) => (
        <div
          key={index}
          className="border cursor-pointer border-gray-200 rounded-lg p-4 mb-4 flex justify-between items-center"
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold leading-none">
                  {agent.role} - {agent.level}
                </h3>
                <p className="text-xs">{agent.type}</p>
                <p className="text-xs">{agent.salaryRange}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center text-center text-sm">
            <div className="flex flex-col space-y-1">
              <span className="font-semibold text-lg">
                {agent.applicationsSent}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Job Applications Sent
              </span>
            </div>
          </div>
        </div>
      ))}
    </DashboardLayout>
  );
}
