"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import { apiClient } from "../api-costum";
import { motion } from "framer-motion";

const EventList = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents();
  }, []); // eslint-disable-line

  const getEvents = () => {
    apiClient.get("/products?populate=*").then(async (data) => {
      console.log(data.data.data);
      await setEvents(data.data.data);
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

  const displayEvent = () => {
    return events.map((event) => {
      return <EventCard key={event.id} event={event} />;
    });
  };
  return (
    <motion.div
      initial="initial"
      variants={variants}
      whileInView="inView"
      viewport={{ once: true }}
    >
      <h1
        id="projects"
        className="text-xl text-center font-extrabold mt-32 sm:text-4xl m-6 "
      >
        Projects
      </h1>
      <div className="flex flex-wrap lg:my-6 ">
        {events.length !== 0 && displayEvent()}
      </div>
    </motion.div>
  );
};

export default EventList;
