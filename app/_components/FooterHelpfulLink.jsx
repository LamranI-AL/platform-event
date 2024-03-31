import React from "react";

const FooterHelpfulLink = () => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <p className="font-medium text-gray-900">Helpful Links</p>

      <ul className="mt-6 space-y-4 text-sm">
        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            Contact{" "}
          </a>
        </li>

        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            FAQs{" "}
          </a>
        </li>

        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            Live Chat{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterHelpfulLink;
