"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const { user } = useUser();
  const router = useRouter();
  const handelClick = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // redirect to dashboard page
      router.push("/service-details");
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={true}
        className="flex m-20"
      >
        <div className=" w-full sm:w-1/2 p-8">
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handelClick}
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-600 sm:w-auto"
                // href={!user ? `/sign-in` : "/"}
              >
                Is one click
              </motion.button>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-800 shadow hover:text-teal-600 focus:outline-none focus:ring active:text-teal-600 sm:w-auto"
                href="/"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mr-8 w-full sm:w-1/2 rounded-2xl"
        >
          <img
            // src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            src="/1.png"
            alt="Hero Image"
            className="max-w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={true}
        className="flex m-20"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mr-8 w-full sm:w-1/2 rounded-2xl"
        >
          <img
            // src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            src="/7.png"
            alt="Hero Image"
            className="max-w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        <div className=" w-full sm:w-1/2 p-8">
          <div className="max-w-xl text-center inset-0 backdrop-blur-sm rounded-2xl p-4  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Découvrez notre
              <strong className="block font-extrabold text-teal-800">
                {" "}
                Prochain événement.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              {`Plongez dans l'atmosphère envoûtante d'un festival à thème
              marocain.`}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handelClick}
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-600 sm:w-auto"
                // href={!user ? `/sign-in` : "/"}
              >
                Is one click
              </motion.button>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-800 shadow hover:text-teal-600 focus:outline-none focus:ring active:text-teal-600 sm:w-auto"
                href="/"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
