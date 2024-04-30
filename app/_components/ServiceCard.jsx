import React from "react";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  //   console.log(service.id);
  return (
    <>
      <article className="w-full p-1 border-t-4 border-teal-950 lg:w-1/4 lg:mx-10 my-3 rounded-2xl shadow transition hover:shadow-lg">
        <img
          alt=""
          src={service.img}
          className="h-56 w-full rounded-xl object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          {/* <time datetime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            10th Oct 2022{" "}
          </time> */}

          <Link href={`/service-details`}>
            <h3 className="mt-0.5 text-lg text-gray-900">{service.name}</h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {service.description}
          </p>
        </div>
        <div className="mt-2 flex flex-col p-3 gap-2 text-center">
          <Link
            // onClick={handelClick}
            className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-sm text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-950 sm:w-auto"
            href="/apply"
          >
            To apply
          </Link>

          <Link
            className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-800 focus:outline-none focus:ring active:text-teal-950 sm:w-auto"
            href={`/service-details`}
          >
            Learn More
          </Link>
        </div>
      </article>
    </>
  );
};

export default ServiceCard;
