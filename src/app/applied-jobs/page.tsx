"use client";

import { useState } from "react";
import Modal from "@/components/modal";
import DashboardLayout from "../layout/dashboardLayout";

export default function AppliedJobs() {
  const [isModalOpen, setModalOpen] = useState(false);

  const rows = [
    { name: "Kathleen Kelejian", title: "Recruiter" },
    { name: "Ahmed Moustafa", title: "Senior Recruiter" },
  ];

  return (
    <DashboardLayout>
      <div>
        <table className="min-w-full leading-normal border">
          <thead>
            <tr>
              <th className="px-5 py-3 border-t border-b border-border-color text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Company
              </th>
              <th className="px-5 py-3 border-t border-b border-border-color text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Position
              </th>
              <th className="px-5 py-3 border-t border-b border-border-color"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {/* Ensure text color is black where needed */}
                <td className="px-5 py-5 border-b border-border-color  bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {row.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-border-color  bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {row.title}
                  </p>
                </td>
                {/* Add border, border-black to the Apply button and adjust text color */}
                <td className="px-5 py-5 border-b border-border-color  bg-white text-sm text-right">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="rounded border border-border-color  px-2 py-1 text-gray-900 hover:bg-gray-100"
                  >
                    Follow Up
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-5 py-5 bg-white border-t border-border-color  flex flex-col xs:flex-row items-center xs:justify-between">
          {/* Adjust the Load More button similarly */}
          <button className="text-sm text-gray-900 hover:text-black">
            Load More
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div className="flex flex-col md:flex-row gap-6 p-6 w-full">
            <div className="md:w-1/3 lg:w-1/4 md:order-2">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold">Acme Inc</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                San Francisco, CA
              </p>
              <h3 className="text-xl font-semibold mb-2">About Us</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Acme Inc is a leading software company that develops many
                popular internet applications. We&apos;re dedicated to making
                the internet a better place for everyone.
              </p>
            </div>

            <div className="md:w-2/3 lg:w-3/4 md:order-1">
              <h2 className="text-2xl font-bold mb-4">Frontend Developer</h2>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                San Francisco, CA
              </p>
              <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400">
                <li>
                  Develop user interfaces for modern rich internet applications
                  with the latest front end technologies.
                </li>
                <li>
                  Perform product analysis and development tasks of increasingly
                  complex nature which may require extensive research and
                  analysis.
                </li>
                <li>
                  Perform product analysis and development tasks of increasingly
                  complex nature which may require extensive research and
                  analysis.
                </li>
                <li>
                  Perform product analysis and development tasks of increasingly
                  complex nature which may require extensive research and
                  analysis.
                </li>
                <li>
                  Perform product analysis and development tasks of increasingly
                  complex nature which may require extensive research and
                  analysis.
                </li>
                <li>Writing tested and documented JavaScript, HTML and CSS.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400">
                <li>3+ years of experience in a similar role</li>
                <li>
                  Proficiency with JavaScript frameworks such as React, Angular,
                  or Vue
                </li>
                <li>Strong knowledge of HTML, CSS, and JavaScript</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">
                Application Instructions
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                To apply, please submit your resume, portfolio, and a brief
                description of why you&apos;re interested in this role.
              </p>
              <button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-150 ease-in-out">
                Apply Now
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}
