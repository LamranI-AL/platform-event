"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { user } = useUser();
  const router = useRouter();
  const handelClick = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // redirect to dashboard page
      router.push("/services");
    }
  };
  return (
    <>
      <div class="flex m-10">
        <div class="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Votre image"
            class="max-w-full h-auto"
          />
        </div>
        <div class="w-1/2 p-8">
          <div className="max-w-xl text-center inset-0 backdrop-blur-sm rounded-2xl p-4  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Plan your event now.
              <strong className="block font-extrabold text-teal-800">
                {" "}
                Welcome .{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              The organization of physical events remains an essential strategy
              for establishing meaningful connections and creating unforgettable
              experiences
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button
                onClick={handelClick}
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                // href={!user ? `/sign-in` : "/"}
              >
                Is one click
              </button>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-800 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center inset-0 backdrop-blur-sm rounded-2xl p-4  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Plan your event now.
              <strong className="block font-extrabold text-teal-800">
                {" "}
                Welcome .{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              The organization of physical events remains an essential strategy
              for establishing meaningful connections and creating unforgettable
              experiences
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button
                onClick={handelClick}
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                // href={!user ? `/sign-in` : "/"}
              >
                Is one click
              </button>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-800 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
