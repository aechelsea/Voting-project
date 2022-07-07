import React from "react";

const SuccessForm = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center px-16 p-8 sm:w-96 md:w-90 w-64 bg-gradient-to-l from-lightbg to- border border-bdbox3 mt-20 ">
        <img
          className="sm:mx-auto mx-auto p-1 pl-2 pt-2  object-cover md:h-36 md:w-36 sm:w-28 sm:h-28  w-20 h-20"
          src="check.png"
          alt=""
        />
        <h1 className="md:text-lg text-sm font-bold text-white text-center my-10">
          Thank You!
          <p className="text-white text-center">Your vote has been success</p>
        </h1>
      </div>
      {/* <div className="">
        <img
          title="Click to connect metamask"
          src="check.png"
          alt="check-logo"
          className="sm:mx-auto object-cover md:h-32 md:w-32 sm:w-32 sm:h-32 w-32 h-32"
        />
        <div className="flex justify-center">
          <h1 className="md:text-lg text-sm font-bold text-white text-center my-10">
            Thank You!
            <p className="text-white text-center">Your vote has been success</p>
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default SuccessForm;
