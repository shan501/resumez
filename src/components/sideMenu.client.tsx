"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React

export default function SideMenu() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(""); // Create a state variable to store the selected menu item

  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Update the state variable when the pathname changes
    setSelectedMenuItem(pathname);

    console.log("pathname", pathname);
  }, [pathname]);

  return (
    <aside className="w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800">
      <header className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="#">
          <img
            alt="Logo"
            className="h-6 w-6"
            height="24"
            src="/placeholder.svg"
            style={{
              aspectRatio: "24/24",
              objectFit: "cover",
            }}
            width="24"
          />
          <span className="text-lg font-semibold">Resumez</span>
        </Link>
        <button className="lg:hidden border border-gray-300 rounded-md p-1">
          <img
            alt="Menu"
            className="h-6 w-6"
            height="24"
            src="/placeholder.svg"
            style={{
              aspectRatio: "24/24",
              objectFit: "cover",
            }}
            width="24"
          />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </header>
      <nav>
        <ul className="flex flex-col">
          <li className="relative">
            <Link
              href="/ai-agent"
              className={`group inline-flex h-9 w-full items-center bg-white px-4 py-2 text-sm font-medium transition-colors ${
                selectedMenuItem === "/ai-agent"
                  ? "bg-gray-100 text-gray-900"
                  : "hover:bg-gray-100 hover:text-gray-900"
              } dark:bg-gray-950 ${
                selectedMenuItem === "/ai-agent"
                  ? "dark:bg-gray-800 dark:text-gray-50"
                  : "dark:hover:bg-gray-800 dark:hover:text-gray-50"
              }`}
            >
              AI Agent
              {selectedMenuItem === "/ai-agent" && (
                <span className="absolute right-0 inset-y-0 w-1 bg-black" />
              )}
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/applied-jobs"
              className={`group inline-flex h-9 w-full items-center bg-white px-4 py-2 text-sm font-medium transition-colors ${
                selectedMenuItem === "/applied-jobs"
                  ? "bg-gray-100 text-gray-900"
                  : "hover:bg-gray-100 hover:text-gray-900"
              } dark:bg-gray-950 ${
                selectedMenuItem === "/applied-jobs"
                  ? "dark:bg-gray-800 dark:text-gray-50"
                  : "dark:hover:bg-gray-800 dark:hover:text-gray-50"
              }`}
            >
              Applied Jobs
              {selectedMenuItem === "/applied-jobs" && (
                <span className="absolute right-0 inset-y-0 w-1 bg-black" />
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
