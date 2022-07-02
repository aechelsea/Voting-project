import React from "react";

const Topbar = (props: any) => {
  return (
    <nav className="flex items-center px-20 py-4">
      <div className="flex">
        <div>
          <img
            src="/mgt.png"
            alt="mgt-logo"
            className="w-[210px] h-[90px] -ml-16"
          />
        </div>
      </div>
      <p className="fixed bottom-0 inset-x-0 text-center mb-5 md:text-xl text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-tpurple">
        Powerby: Finstable-Trainee1
      </p>
    </nav>
  );
};

export default Topbar;
