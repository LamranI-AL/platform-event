"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  const { user } = useUser();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`bg-white fixed  w-full z-10 transition-all duration-300 ${
        scrolled ? "shadow-md  " : " mt-0"
      }`}
    >
      <div className="flex h-16 max-w-screen-xxl items-center gap-8 sm:px-6 lg:px-8 shadow-md">
        <Link className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#projects"
                >
                  {" "}
                  Projects{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/about-us"
                >
                  {" "}
                  About Us{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
            </ul>
          </nav>
          {!user ? (
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-md bg-teal-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="/sign-in"
                >
                  Login
                </Link>

                <Link
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                  href="/sign-in"
                >
                  Register
                </Link>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <h2 className="flex text-red-800 gap-1 cursor-pointer ">
                <ShoppingCart />
                (0)
              </h2>
              <UserButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
