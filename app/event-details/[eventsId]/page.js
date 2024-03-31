"use client";
import BreadCrum from "@/app/_components/BreadCrum";
import { apiClient } from "@/app/api-costum";
import React, { useEffect, useState } from "react";
import ProductHero from "./_components/ProductHero";
import ProductSeggestion from "./_components/ProductSeggestion";
import EventCard from "@/app/_components/EventCard";
import Link from "next/link";

const page = ({ params }) => {
  const [event, setEvent] = useState({});
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    displayEventById(params?.eventsId);
  }, []);
  const getEventsFilted = (category) => {
    apiClient
      .get(`/products?filters[category][$eq]=${category}&populate=*`)
      .then(async (data) => {
        const tempTable = data.data.data;
        setEvents(tempTable);
      });
  };
  const displayEventById = (id) => {
    apiClient
      .get(`/products/${id}?populate=*`)
      .then((res) => {
        const tempTable = res?.data.data;
        setEvent(tempTable);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  getEventsFilted(event.attributes?.category);

  return (
    <div>
      <div class="justify-center m-4">
        <BreadCrum actuellPath={"Event-details"} ancienPath={`Home`} />
      </div>
      {Object.keys(event).length !== 0 && <ProductHero event={event} />}
      <ProductSeggestion events={events} />
    </div>
  );
};

export default page;
