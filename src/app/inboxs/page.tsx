import { Switch } from "@/components/ui/switch";

export default function Component() {
  return (
    <div className="w-full max-w-3xl border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="w-1/4 flex items-center justify-center">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="unread"
          >
            Unread
          </label>
          <Switch className="ml-auto" id="unread" />
        </div>
      </div>
      <table className="w-full">
        <tbody>
          <tr className="flex items-center p-4 border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-100 dark:hover:bg-gray-900">
            <td className="w-1/4 flex items-center">
              <div className="ml-2 text-sm font-medium leading-none truncate">
                Mark Otto
              </div>
            </td>
            <td className="w-1/2 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <span className="font-medium peer-disabled:opacity-100">
                Your UI feedback
              </span>
              <span className="ml-1 peer-disabled:opacity-70">
                - I think we should use a bit more padding around the buttons.
                It feels a bit cramped right now.
              </span>
            </td>
            <td className="w-1/4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              2:32 PM
            </td>
          </tr>
          <tr className="flex items-center p-4 border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-100 dark:hover:bg-gray-900">
            <td className="w-1/4 flex items-center">
              <div className="ml-2 text-sm font-medium leading-none truncate">
                Ashley
              </div>
            </td>
            <td className="w-1/2 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <span className="font-medium peer-disabled:opacity-100">
                Weekend plans
              </span>
              <span className="ml-1 peer-disabled:opacity-70">
                - Hey! Are you up for a hike this weekend? The weather looks
                perfect.
              </span>
            </td>
            <td className="w-1/4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              10:15 AM
            </td>
          </tr>
          <tr className="flex items-center p-4 border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-100 dark:hover:bg-gray-900">
            <td className="w-1/4 flex items-center">
              <div className="ml-2 text-sm font-medium leading-none truncate">
                Sarah
              </div>
            </td>
            <td className="w-1/2 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <span className="font-medium peer-disabled:opacity-100">
                Dinner reservations
              </span>
              <span className="ml-1 peer-disabled:opacity-70">
                - I've made a reservation at the Italian place for 7 PM. See you
                there!
              </span>
            </td>
            <td className="w-1/4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              1:45 PM
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
