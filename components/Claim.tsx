import { ethers } from "ethers";
import React from "react";
import { getProvider } from "../services/wallet-services";
import { Vote, Vote__factory } from "../typechain";

const claim = () => {
  const reward = async()=>{
    const claim = Vote__factory.connect('0xD94DB417C0b658C41f6Ba0465Ab8630D8e2dfB95',getProvider()!) as Vote ;
    console.log(claim.address);
  }
  reward()


  return (
    <div className="justify-center px-16 p-8 w-80 bg-gradient-to-r from-sky-900 to-darkblue-500 border border-cyan-400 rounded-3xl">
      <h1 className="text-center font-bold text-xl pb-5 text-white">
        Claim Rewards
      </h1>
      <div className="ml-4 mt-4 border border-bdtoken w-40 h-40 rounded-full relative">
        <img
          className="p-1 ml-2 pl-2 pt-2 sm:mx-auto object-cover w-36 h-36"
          src="token.png"
          alt=""
        />
      </div>
      <p className="md:text-lg text-sm font-bold text-gray-600 text-center my-10">
        Rewards <p className="text-white text-sm">{}</p>
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
