"use client";
import { useState } from "react";
import DashboardLayout from "@/app/layout/dashboardLayout";
import TagsList from "@/components/tagsList";
import Button from "@/components/buttons";

export default function CreateAiAgent() {
  const [jobTitle, setJobTitle] = useState<string[]>([]);
  const [newJobTitle, setNewJobTitle] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>(""); // Added state for job description
  const [minSalary, setMinSalary] = useState<string>("");
  const [maxSalary, setMaxSalary] = useState<string>("");

  const companies = [
    "Startup",
    "Mid-Size",
    "Enterprise",
    "Non-Profit",
    "Government",
  ];
  const locations = ["On-Site", "Remote", "Hybrid"];

  const handleAddJobTitlePrefrence = () => {
    setJobTitle([...jobTitle, newJobTitle]);
    setNewJobTitle(""); // Reset the input field
  };

  const addJobSearch = () => {
    // Add logic to add job search agent
  };

  return (
    <DashboardLayout>
      <h1 className="text-bold text-xl pb-12">Create Job Search Agent</h1>
      <h2 className="text-bold text-lg pb-1">Job Title</h2>
      <input
        type="text"
        value={newJobTitle}
        onChange={(e) => setNewJobTitle(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-1 mr-2 w-1/4" // Adjusted width to full
      />
      <h2 className="text-bold text-lg pt-8 pb-1">Location Preferences</h2>
      <TagsList tags={locations} />
      <h2 className="text-bold text-lg  pt-8 pb-1">Company Type</h2>
      <TagsList tags={companies} />
      <h2 className="text-bold text-lg  pt-8 pb-1">Salary</h2>
      <div>
        <input
          type="text"
          placeholder="Min"
          value={minSalary}
          onChange={(e) => setMinSalary(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 mr-2"
        />
        <span>-</span>
        <input
          type="text"
          placeholder="Max"
          value={maxSalary}
          onChange={(e) => setMaxSalary(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 ml-2"
        />
      </div>
      <h2 className="text-bold text-lg pt-8 pb-1">Additonal Info</h2>
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className="w-1/2 border border-gray-300 rounded-md px-3 py-1 mr-2 h-32 overflow-y-auto mb-8" // Tailwind classes for styling
      />
      <Button primaryButton={true} size={"large"} extraClassName={"block"}>
        Create Agent
      </Button>
    </DashboardLayout>
  );
}
