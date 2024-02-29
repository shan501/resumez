export default function CompanyHeader() {
  return (
    <div>
      <h1 className="mb-2">Todays Pick</h1>
      <div className="border rounded-lg border-border-color flex flex-col md:flex-row gap-6 md:gap-12 max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">Senior Software Engineer</h1>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              JavaScript
            </span>
            <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              React
            </span>
            <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Node.js
            </span>
            <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              GraphQL
            </span>
          </div>
          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-2">
            <span>Remote</span>
            <span className="border-l pl-2">Location: San Francisco, CA</span>
          </div>
        </div>
        <div className="hidden md:block border-r border-gray-200 dark:border-gray-700" />
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <img
              alt="Company Logo"
              className="rounded-full"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50}
            />
            <h2 className="text-2xl font-semibold">Acme Inc</h2>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Industry: Technology</p>
            <p>
              Acme Inc is a leading provider of business solutions and services
              for various industries. We specialize in software development, IT
              consulting, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
