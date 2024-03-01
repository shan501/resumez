"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/buttons";
import "./globals.css";
import Modal from "@/components/modal";

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

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      title: "Automated Job Applications",
      description:
        "Using AI, we will send job applications on your behalf to companies you are interested in.",
    },
    {
      title: "Job Application Tracking",
      description:
        "Keep track of all the job applications you have sent and their status. ",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendWaitlistEmail = async () => {
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
      });
      setIsModalOpen(false);
      setWaitlistSuccess(true);
    } catch (e) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="sticky top-0 z-50 py-4 px-8 flex justify-center items-center bg-white sm:justify-between">
        <Link href="#">
          <h1 className="text-3xl font-bold">Resumez</h1>
        </Link>
        <div className="space-x-4 hidden sm:flex">
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
        <Button extraClassName={"sm:flex hidden"} onClick={openModal}>
          Join Waitlist Now
        </Button>
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
          <div className="mt-8 flex justify-center items-center space-y-4">
            <button
              className="px-4 py-2 bg-black text-white border border-black rounded-lg dark:bg-blue-500 focus:outline-none"
              type="submit"
              onClick={openModal}
            >
              Join Waitlist Now
            </button>
          </div>
          {waitlistSuccess && (
            <div className="mt-4 text-sm text-green-500 dark:text-green-400">
              Thank you! We will reach out to you soon.
            </div>
          )}
        </div>
        <section id="features">
          <div className="mt-32 flex flex-col gap-6 px-4 md:px-6 justify-between items-center">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold sm:text-5xl">What We Offer</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Save up to ~20 hours per week by automating your job application
                process.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="items-start space-y-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border border-border-color p-4 rounded-lg"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center justify-center rounded-lg border border-gray-200 w-16 h-16 dark:border-gray-800 mb-4">
                        <ActivityIcon className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold text-xl">{feature.title}</h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="block">
                  First name
                </label>
                <input
                  id="first-name"
                  placeholder="Enter your first name"
                  className="block w-full p-2 border border-gray-300 rounded outline-none"
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      firstName: e.target.value,
                    })
                  }
                  value={contactForm.firstName}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="block">
                  Last name
                </label>
                <input
                  id="last-name"
                  placeholder="Enter your last name"
                  className="block w-full p-2 border border-gray-300 rounded outline-none"
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      lastName: e.target.value,
                    })
                  }
                  value={contactForm.lastName}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="block w-full p-2 border border-gray-300 rounded outline-none"
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    email: e.target.value,
                  })
                }
                value={contactForm.email}
              />
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <Button secondary={true} onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={sendWaitlistEmail}>Submit</Button>
          </div>
        </div>
      </Modal>
      <footer className="mt-12 flex items-center justify-center py-4 text-gray-600 dark:text-gray-400">
        © 2024 Resumez Inc. All rights reserved.
      </footer>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

// CheckIcon component with typed props
const CheckIcon: React.FC<IconProps> = (props) => {
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
};

// ActivityIcon component with typed props
const ActivityIcon: React.FC<IconProps> = (props) => {
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
};
