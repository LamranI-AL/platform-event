"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import { apiClient } from "../api-costum";

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

  const displayEvent = () => {
    return events.map((event) => {
      return <EventCard key={event.id} event={event} />;
    });
  };
  return (
    <>
      <h1
        id="projects"
        className="text-xl text-center font-extrabold mt-32 sm:text-4xl m-6 "
      >
        Projects
      </h1>
      <div className="flex flex-wrap lg:my-6 ">
        {events.length !== 0 && displayEvent()}
      </div>
    </>
  );
};

export default EventList;
