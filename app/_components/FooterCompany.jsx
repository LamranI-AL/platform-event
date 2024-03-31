import React from "react";

const FooterCompany = () => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <p className="font-medium text-gray-900">Company</p>

      <ul className="mt-6 space-y-4 text-sm">
        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            About{" "}
          </a>
        </li>

        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            Meet the Team{" "}
          </a>
        </li>

        <li>
          <a href="#" className="text-gray-700 transition hover:opacity-75">
            {" "}
            Accounts Review{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterCompany;
