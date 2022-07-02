import React, { useState } from "react";
import Topbar from "./Topbar";

const ConnectForm = () => {
  return (
    <div className="max-w-lg mx-auto rounded-3xl shadow-eshadow shadow-blueshadow w-1/3 p-12 mt-10 bg-lightbg">
      <div className="">
        <img
          title="Click to connect metamask"
          src="/MetaMask-Logo.png"
          alt="MetaMask-logo"
          className="sm:mx-auto object-cover md:h-full sm:w-48"
        />
        <p className="md:text-3xl text-sm font-bold text-white sm:text-center mt-16 mb-7">
          Connect to <a className="text-darkorange">Metamask</a>
        </p>
      </div>
      <div className="flex justify-center">
        <button className="rounded-full bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white text-xl font-bold px-20 py-3 mt-4">
          Connect
        </button>
      </div>
      {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/bangkok.webp"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ConnectForm;
