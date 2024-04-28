import React from "react";

const ProductHero = ({ event }) => {
  // console.log(event);
  return (
    <div>
      <div class="bg-gray-100 py-10">
        <div class="container mx-2 flex flex-wrap">
          <div class="w-full md:w-1/2">
            <div class="bg-white rounded-lg shadow-lg p-6 ml-2">
              <img
                src={event.imgUrl}
                alt="Product Image"
                class="w-full rounded-md mb-4 object-cover h-60"
              />
              <h2 class="text-2xl text-gray-800 font-semibold mb-2">
                {event.title}
              </h2>
              <ul class="text-gray-700">
                <li class="mb-2">
                  <span class="font-semibold">Presence count:</span> 200
                </li>
                {/* <li class="mb-2">
                  <span class="font-semibold">Date:</span>{" "}
                  {event.attributes.date}
                </li> */}
                <li class="mb-2">
                  <span class="font-semibold">Locale:</span> ensa bm
                </li>
                <li class="mb-2">
                  <span class="font-semibold">Satus:</span> Finished
                </li>
              </ul>
              <button class="bg-teal-600 hover:bg-teal-700 text-sm text-white font-bold py-2 px-4 rounded mt-4">
                Add to Cart
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/2 mt-4 md:mt-0">
            <div class="bg-white rounded-lg shadow-lg p-6 ml-2">
              <h2 class="text-2xl text-gray-800 font-semibold mb-2">
                Event Information
              </h2>
              <p class="text-gray-700 mb-4">{event.description}</p>
              <a href="#" class="text-teal-600 hover:text-teal-700">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
