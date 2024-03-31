import React from "react";
import { apiClient } from "../api-costum";
import Link from "next/link";

const EventCard = ({ event }) => {
  //   const url = apiClient.get("/event.attributes.image.data.attributes.url");
  return (
    <div className="w-full rounded-2xl lg:w-1/4 lg:mx-10 my-3 ">
      <Link
        href={`/event-details/${event.id}`}
        className="group rounded-2xl relative block bg-black"
      >
        <img
          alt=""
          src={event.attributes.image.data.attributes.url}
          className="absolute rounded-2xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-800 group-hover:text-white">
            Quark
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl line-clamp-1">
            {event.attributes.title}
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                {event.attributes.decription}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
