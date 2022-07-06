import React from "react";

const Topbars = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-darkbg">
      <div>
        <img
          src="/mgt.png"
          alt="mgt-logo"
          className="w-[210px] h-[90px] -ml-16"
        />
      </div>
      <img
        className="ml-auto -mr-6 mt-3 z-0"
        src="MetaMask-Logo.png"
        alt="eth"
        width="64px"
      />
      <div className="rounded-full bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-xl text-xs font-bold md:px-16 py-5 sm:px-10 mt-4"></div>
      <footer className="fixed bottom-0 inset-x-0 text-center mb-5 md:text-xl text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-tpurple">
        Powerby: Finstable-Trainee1
      </footer>
    </nav>
  );
};

export default Topbars;
