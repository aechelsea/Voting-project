import React from "react";

const Topbar = (props: any) => {
  return (
    <nav className="flex justify-between items-center px-20 py-4">
      <div className="flex">
        <div>
          <img
            src="/mgt.png"
            alt="mgt-logo"
            className="w-[210px] h-[90px] -ml-16"
          />
        </div>
        {/* <button className="rounded-full bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-xl text-xs font-bold md:px-16 py-3 sm:px-8 mt-4"></button> */}
      </div>
      <footer className="fixed bottom-0 inset-x-0 text-center mb-5 md:text-xl text-sm text-white">
        Power by: Finstable-Trainee1
      </footer>
    </nav>
  );
};

export default Topbar;
