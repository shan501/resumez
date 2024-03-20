import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "../globals.css";

export default function Component() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/jobs");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="rounded-lg max-w-md w-full space-y-4 border-2 py-8 px-4">
        <div className="max-w-md w-full space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Sign up for an account</h1>
            <p className="text-sm font-medium leading-none text-gray-500">
              Create your account below
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                id="first-name"
                placeholder="Enter your first name"
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input
                id="last-name"
                placeholder="Enter your last name"
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="john.doe@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Password</Label>
              <Input
                id="new-password"
                placeholder="Enter a password"
                required
                type="password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                placeholder="Confirm your password"
                required
                type="password"
              />
            </div>
            <Button className="w-full" type="submit">
              Sign up
            </Button>
            <Link
              className="block text-center text-sm font-medium text-blue-600 hover:text-blue-700"
              href="#"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
