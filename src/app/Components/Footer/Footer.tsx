import React from "react";

const Footer = () => {
  return (
    <footer className="text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-orange text-xl font-space">
            Goonj 2024
          </span>
        </a>
        <div className="text-sm text-white-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 flex space-x-28 text-center  items-center">
          <div> © 2024 Goonj Digital Operations</div>
          <div className="">
            <p className="text-white">Made with &#10084;&#65039; by</p>
            <div className="space-x-4">
              <a
                href="https://www.linkedin.com/in/hitesh-bandhu/"
                className=" ml-1 text-yellow"
                rel="noopener noreferrer"
                target="_blank"
              >
                Hitesh Bandhu
              </a>
              <a
                href="https://www.linkedin.com/in/itsmayur718/"
                className="ml-1 text-blue"
                rel="noopener noreferrer"
                target="_blank"
              >
                Mayur Sehgal
              </a>
              <a
                href="https://www.linkedin.com/in/kanika-tiwari23/"
                className=" ml-1 text-yellow"
                rel="noopener noreferrer"
                target="_blank"
              >
                Kanika Tiwari
              </a>
              <a
                href="https://www.linkedin.com/in/bhargavi-goyal-b536a8259/"
                className=" ml-1 text-blue"
                rel="noopener noreferrer"
                target="_blank"
              >
                Bhargavi Goyal
              </a>
            </div>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
