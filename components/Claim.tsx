import React from "react";

const claim = () => {
  return (
    <div className="justify-center px-16 p-8 w-96 bg-gradient-to-r from-sky-900 to-darkblue-500 border border-cyan-400 rounded-3xl">
      <h1 className="text-center font-bold text-xl pb-5 text-white">
        Claim Rewards
      </h1>
      <p className="md:text-lg text-sm font-bold text-gray-600 text-center my-10">
        Rewards <a className="text-white md:text-lg text-sm">= 9.99 ETH</a>
        <img className="inline" src="eth.png" alt="eth" width="40px" />
      </p>
      <div className="flex justify-center">
        <button className="rounded-full bg-green-400 hover:bg-green-500  text-white md:text-lg font-bold md:px-8 py-2 px-4 mt-6">
          ACCEPT
        </button>
      </div>
    </div>
  );
};

export default claim;
