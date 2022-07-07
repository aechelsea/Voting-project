import React from "react";

const Topbars = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-darkbg">
      <div>
        <img
          src="/mgt.png"
          alt="mgt-logo"
          className="md:w-[210px] md:h-[90px] sm:w-[210px] sm:h-[90px] w-[130px] h-[48px] md:-ml-16 -ml-16"
        />
      </div>
      <img
        className="ml-auto -mr-6 mt-3 z-0"
        src="MetaMask-Logo.png"
        alt="eth"
        width="64px"
      />
      <div className="rounded-full md:px-16 sm:px-16 px-10 py-4 mt-4 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-xl text-xs font-bold "></div>
      <footer className="fixed bottom-0 inset-x-0 text-center mb-2 md:text-xl text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-tpurple">
        Powerby: Finstable-Trainee1
      </footer>
    </nav>
  );
};

export default Topbars;