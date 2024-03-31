import React from "react";

const FooterHeroSection = () => {
  return (
    <>
      <div className="col-span-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Get the latest news about us !
          </h2>

          <p className="mt-4 text-gray-500">Contact us</p>
        </div>
      </div>

      <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
        <form className="w-full">
          <label htmlFor="UserEmail" className="sr-only">
            {" "}
            Email{" "}
          </label>

          <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
            <input
              type="email"
              id="UserEmail"
              placeholder="quark.ensabm@gmail.com"
              className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
            />

            <button className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FooterHeroSection;
