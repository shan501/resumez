import React from "react";
import Link from "next/link";
import Button from "@/components/buttons";
import "./globals.css";

type PricingPlan = {
  id: number;
  title: string;
  price: string;
  features: string[];
};

type FeatureItem = {
  title: string;
  description: string;
};

export default function Home() {
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      title: "Free",
      price: "$0",
      features: ["Send 5 Job Applications"],
    },
    {
      id: 3,
      title: "Premium",
      price: "$100",
      features: ["Send 250 Job Applications"],
    },
    {
      id: 2,
      title: "Standard",
      price: "$75",
      features: ["Send 100 Job Applications"],
    },
  ];

  const features: FeatureItem[] = [
    {
      title: "All-Day Comfort",
      description:
        "Experience lasting comfort with carefully designed ergonomics that make our products a joy to use, even during extended wear.",
    },
    {
      title: "Seamless Connectivity",
      description:
        "Stay effortlessly connected with reliable and stable connectivity that ensures you're always in touch with your digital world.",
    },
    {
      title: "Immersive Audio",
      description:
        "Let the music transport you with rich, immersive audio that brings out the best in every track, podcast, or call.",
    },
    {
      title: "Versatile Style",
      description:
        "Express your individuality with products designed to be as unique as you are, blending style with substance for a one-of-a-kind statement.",
    },
  ];

  return (
    <div>
      <div className="sticky top-0 z-50 py-4 px-8 flex justify-between items-center bg-white">
        <Link href="#">
          <h1 className="text-3xl font-bold">Resumez</h1>
        </Link>
        <div className="space-x-4">
          <Link
            className="text-gray-600 dark:text-gray-400 hover:underline"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-gray-600 dark:text-gray-400 hover:underline"
            href="#pricing"
          >
            Pricing
          </Link>
        </div>
        <Button>Join Waitlist Now</Button>
      </div>
      <div className="flex flex-col bg-white dark:bg-gray-900">
        <div className="lg:mt-44 mt-16 flex flex-col items-center justify-center flex-grow text-center px-4 sm:px-6">
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl max-w-3xl">
            Send Mass Job Applications Effortlessly and Quickly
          </h1>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Create your job profile, tell us your job preferences, and we will
            send job applications on your behalf using AI.
          </p>
          <form className="w-full max-w-md mt-8">
            <div className="flex items-center">
              <input
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:rounded-r-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="px-4 py-2 bg-black text-white border border-black rounded-r-md dark:bg-blue-500 focus:outline-none"
                type="submit"
              >
                Join Waitlist Now
              </button>
            </div>
          </form>
        </div>
        <section id="pricing">
          <div className="mt-24 flex flex-col gap-6 px-4 md:px-6 justify-between items-center">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold sm:text-5xl">What We Do</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Resumez take care of the most time consuming part of job
                hunting, applying to jobs. We use Ai to find the most relevant
                jobs for you and automatically help you apply to them so you can
                focus on what is important.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border border-border-color p-4 rounded-lg"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center justify-center rounded-lg border border-gray-200 w-16 h-16 dark:border-gray-800 mb-4">
                          <ActivityIcon className="w-8 h-8" />
                        </div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing">
          <div className="px-4 md:px-6 space-y-12 min-h-[704px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Plans & Pricing
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  All plans include advanced analytics, customer support, and
                  job application tracking.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-center gap-6 sm:max-w-4xl md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`${
                    index === 1
                      ? "border-black border-2 lg:py-8"
                      : "border-gray-200"
                  }
                flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950
            `}
                >
                  <div className="grid gap-4 p-6">
                    <h3 className="text-xl font-semibold">{plan.title}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-semibold">
                        {plan.price.split("/")[0]}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-800" />
                  <ul className="grid gap-4 p-6">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <footer className="mt-12 flex items-center justify-center py-4 text-gray-600 dark:text-gray-400">
        © 2024 Resumez Inc. All rights reserved.
      </footer>
    </div>
  );
}

function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ActivityIcon(props) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
