"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { apiClient } from "@/app/api-costum";
import ServiceMiniCard from "./ServiceMiniCard";

const ServiceHero = ({ id }) => {
  useEffect(() => {
    getServices();
  }, []);
  const [services, setServices] = useState([]);
  const getServices = () => {
    apiClient
      .get("/services?populate=*")
      .then((response) => {
        console.log(response.data.data);
        setServices(response.data.data);
      })
      .catch((error) => {
        alert(`Error! ${error}`);
      });
  };
  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  const displayService = () => {
    return services?.map((service) => {
      return <ServiceMiniCard service={service} id={id} />;
    });
  };
  return (
    <motion.section
      initial="initial"
      variants={variants}
      whileInView="inView"
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find your service
            </h2>

            <p className="mt-4 text-gray-600">
              Créez des moments mémorables avec nous! Que ce soit pour un
              anniversaire, une compétition ou un festival, notre équipe
              expérimentée s'occupe de tout. Des événements impeccables, des
              souvenirs durables. Faites-nous confiance pour faire de votre
              vision une réalité!
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started now
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {displayService()}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceHero;
