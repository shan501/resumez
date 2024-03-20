/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1RH2NIFGtz0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "../globals.css";

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="rounded-lg max-w-md w-full space-y-4 border-2 py-8 px-4">
        <div className="space-y-2 pb-8">
          <h1 className="text-3xl font-bold">Sign in to your account</h1>
          <p className="text-sm font-medium leading-none text-gray-500">
            Enter your details below
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="john.doe" required />
          </div>
          <div className="space-y-2 pb-8">
            <div className="flex items-center justify-between">
              <Label className="mb-0" htmlFor="password">
                Password
              </Label>
              <Link
                className="ml-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                href="#"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
          <Link
            className="block text-center text-sm font-medium text-blue-600 hover:text-blue-700"
            href="/signup"
          >
            No account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
