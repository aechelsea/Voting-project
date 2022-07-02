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
      {/* <div className="hidden space-x-6 lg:flex text-black"> */}
      {/* <button
          className="text-blue-700 hover:bg-blue-200 border border-indigo-600  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white"
          type="button"
        >
          {test}
        </button> */}
      {/* </div> */}
    </nav>
  );
};

export default Topbar;
