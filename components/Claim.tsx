import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { getProvider, getSigner } from "../services/wallet-services";
import { Vote__factory } from "../typechain";

const Claim = () => {
  const [rewards, setRewards] = useState("");
  const reward = async () => {
    const signer = getSigner();
    const claim = await Vote__factory.connect(
      "0x05A4FD94BF6258bd84A945fE44fBa3A8401BF87E",
      getProvider()
    ).connect(signer);
    const getReward = await claim.getReward();
    // console.log('reward',getReward.toString());
    setRewards(
      getReward
        .div(10 ** 10)
        .div(10 ** 8)
        .toString()
    );
  };
  const claimReward = async () => {
    const signer = getSigner();
    const claim = await Vote__factory.connect(
      "0x05A4FD94BF6258bd84A945fE44fBa3A8401BF87E",
      getProvider()
    ).connect(signer);
    const claimReward = await claim.claimReward();
  };
  console.log(rewards);
  useEffect(() => {
    reward();
  }, []);

  return (
    <div className="justify-center px-16 p-8 w-80 bg-gradient-to-r from-sky-900 to-darkblue-500 border border-cyan-400 rounded-3xl">
      <h1 className="text-center font-bold text-xl pb-5 text-white">
        Claim Rewards
      </h1>
      <div className="ml-4 my-4 border border-bdtoken w-40 h-40 rounded-full relative">
        <img
          className="p-1 ml-2 pl-2 pt-2 sm:mx-auto object-cover w-36 h-36"
          src="token.png"
          alt=""
        />
      </div>
      <h2 className="inline text-lg ml-4 font-bold text-gray-400 text-center">
        Rewards: <a className="text-white text-lg">{rewards} ACT</a>
        <img className="inline" src="eth.png" alt="eth" width="30px" />
      </h2>

      <div className="flex justify-center">
        {}
        <button
          className="rounded-full bg-green-400 hover:bg-green-500  text-white md:text-lg font-bold md:px-8 py-1 px-4 mt-6"
          onClick={() => claimReward()}
        >
          ACCEPT
        </button>
      </div>
    </div>
  );
};

export default Claim;
