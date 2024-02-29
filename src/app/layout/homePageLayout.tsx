import Link from "next/link";
import "../globals.css";
import Button from "@/components/buttons";

export default function HomePageLayout({ children }) {
  return (
    <div>
      <div className="py-4 px-8 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold">Resumez</h1>
        </Link>
        <div className="space-x-4">
          <Link
            className="text-gray-600 dark:text-gray-400 hover:underline"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-gray-600 dark:text-gray-400 hover:underline"
            href="#"
          >
            Pricing
          </Link>
        </div>
        <Button>Join Waitlist Now</Button>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        {children}
      </div>
      <footer className="mt-12 flex items-center justify-center py-4 text-gray-600 dark:text-gray-400">
        © 2024 Resumez Inc. All rights reserved.
      </footer>
    </div>
  );
}

interface MountainIconProps extends React.SVGProps<SVGSVGElement> {}

function MountainIcon(props: MountainIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
