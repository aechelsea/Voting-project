import React, { useState } from "react";
import Topbar from "./Topbar";

const ConnectForm = () => {
  return (
    <div className="max-w-md mx-auto rounded-3xl shadow-eshadow shadow-blueshadow w-1/3 py-5 mt-10 bg-lightbg">
      <div>
        <img
          title="Click to connect metamask"
          src="/MetaMask-Logo.png"
          alt="MetaMask-logo"
          className="sm:mx-auto object-cover md:h-full sm:w-48"
        />
        <div className="flex justify-center">
          <p className="md:text-3xl text-sm font-bold text-white text-center my-10">
            Connect to <a className="text-darkorange">Metamask</a>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="rounded-full bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-xl text-xs font-bold md:px-16 py-3 sm:px-8 mt-4">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ConnectForm;
