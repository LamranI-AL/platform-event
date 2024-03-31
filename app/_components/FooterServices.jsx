import React from "react";

const FooterServices = () => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <p className="font-medium text-gray-900">Services</p>

      <ul className="mt-6 space-y-4 text-sm">
        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            1on1 Coaching{" "}
          </a>
        </li>

        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            Company Review{" "}
          </a>
        </li>

        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            Accounts Review{" "}
          </a>
        </li>

        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            HR Consulting{" "}
          </a>
        </li>

        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            SEO Optimisation{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterServices;
