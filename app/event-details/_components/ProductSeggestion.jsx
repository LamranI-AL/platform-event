import EventCard from "@/app/_components/EventCard";
import React from "react";
const ProductSeggestion = ({ events }) => {
  const displayEventSugg = () => {
    return events
      ?.map((eve, key) => {
        return <EventCard event={eve} key={key} />;
      })
      .slice(0, 5);
  };
  return (
    <>
      {" "}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              suggestion events
            </h2>

            {/* <p className="mx-auto mt-4 max-w-md text-gray-500">
              We ve chosen this section for you based on suggestions, almost
              like your favorite choice. While it s not exactly your top pick,
              we believe you might enjoy it. Enjoy
            </p> */}
          </header>
          {/* <div className="flex flex-wrap lg:my-6 ">{displayEventSugg()}</div> */}
        </div>
      </section>
      <div className="flex flex-wrap lg:my-6 ">{displayEventSugg()}</div>
    </>
  );
};

export default ProductSeggestion;
