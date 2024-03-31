"use client";
import React from "react";
import FooterResauxSocieaux from "./FooterResauxSocieaux";
import FooterServices from "./FooterServices";
import FooterCompany from "./FooterCompany";
import FooterHelpfulLink from "./FooterHelpfulLink";
import FooterHeroSection from "./FooterHeroSection";
import { useUser } from "@clerk/nextjs";

const Footer = () => {
  const { user } = useUser();
  return (
    user && (
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-teal-600">
              <svg
                id="logo-72"
                width="52"
                height="44"
                viewBox="0 0 53 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
                  class="ccustom"
                  fill="#212326"
                ></path>
              </svg>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <FooterHeroSection />

              <FooterServices />

              <FooterCompany />

              <FooterHelpfulLink />

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900">Downloads</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Marketing Calendar{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      SEO Infographics{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <FooterResauxSocieaux />
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500">
                &copy; 2022. Quark. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
