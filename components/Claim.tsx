import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import {
  getProvider,
  getSigner,
  getWalletAddress,
} from "../services/wallet-services";
import { ACToken__factory, Vote__factory } from "../typechain";

const Claim = () => {
  const [rewards, setRewards] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [time, setTime] = useState(0);
  const [check, setCheck] = useState(true);

  const [address, setAddress] = useState<string | null>(null);
  const accountData = async () => {
    const addr = getWalletAddress(); //user address
    // console.log(addr);
    setAddress(addr);
  };

  const reward = async () => {
    const signer = getSigner();
    const claim = await Vote__factory.connect(
      "0x2e7B07861b0A2d62382132c30d907951D9fFeBFF",
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
      "0x2e7B07861b0A2d62382132c30d907951D9fFeBFF",
      getProvider()
    ).connect(signer);
    const claimReward = await claim.claimReward();
  };
  console.log(rewards);

  const getTimestamp = async () => {
    const signer = getSigner();
    const vote = Vote__factory.connect(
      "0x2e7B07861b0A2d62382132c30d907951D9fFeBFF",
      getProvider()
    ).connect(signer);
    const timestamp = await vote.getTimestamp();
    // const timeCurrent = new Date().valueOf();
    // console.log('time current', timeCurrent);
    const time = timestamp.mul(10 ** 3).toNumber();
    setTime(time);
  };

  const checkAddr = async () => {
    const signer = getSigner();
    const addr = Vote__factory.connect(
      "0x2e7B07861b0A2d62382132c30d907951D9fFeBFF",
      getProvider()
    ).connect(signer);
    const addrWinning = await (await addr.voters(address!)).vote;
    const winning = await addr.winning();
    setCheck(addrWinning == winning);
  };

  useEffect(() => {
    const countDownDate = time;
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var day = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var second = Math.floor((distance % (1000 * 60)) / 1000);

      setHours(hour);
      setMinutes(minute);
      setSeconds(second);
      setDays(day);
      // console.log('time', days, hours, minutes, seconds);
    }, 1000);
    return () => {
      clearInterval(x);
    };
  }, [time]);

  useEffect(() => {
    reward();
    getTimestamp();
    accountData();
  }, []);

  const addTokenToWallet = async () => {
    const signer = getSigner();
    const ACT = ACToken__factory.connect(
      "0x0b31df134fd5e61ce077725eB71DD5d1809c478a",
      getProvider()
    ).connect(signer);
    const ACT_token = await ACT.address;
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: ACT_token, // The address that the token is at.
            symbol: "ACT", // A ticker symbol or shorthand, up to 5 chars.
            decimals: 18, // The number of decimals in the token
            // image: token.imageUrl, // A string url of the token logo
          },
        },
      });
      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="justify-center px-16 p-8 w-80 bg-gradient-to-r from-sky-900 to-darkblue-500 border border-cyan-400 rounded-3xl mt-8">
      <h1 className="text-center font-bold text-xl pb-5 text-white">
        Claim Rewards
      </h1>
      <p className="text-center text-white">IMPORT TOKEN</p>
      <p className="text-center flex justify-center items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </p>
      <div className="ml-4 my-4 border border-bdtoken w-40 h-40 rounded-full relative hover:scale-125 transition duration-300 shadow-lg shadow-cyan-500  ">
        <img
          className="p-1 mx-2 pl-2 pt-2 sm:mx-auto object-cover w-36 h-36 cursor-pointer "
          src="token.png"
          alt=""
          onClick={() => addTokenToWallet()}
        />
      </div>
      <div className=" mt-8">
        <h2 className="inline text-lg ml-4 font-bold text-gray-400 text-center mt-4">
          Rewards: <a className="text-white text-sm">{rewards} ACT</a>
          <img className="inline" src="eth.png" alt="eth" width="30px" />
        </h2>
      </div>

      <div className="flex justify-center">
        {time ? (
          <p className="text-white text-lg mt-6">
            {days} Days {hours.toString().padStart(2,'0')}:{minutes.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}
          </p>
        ) : (
          <button
            className="rounded-full bg-green-400 hover:bg-green-500  text-white md:text-lg font-bold md:px-8 py-1 px-4 mt-6"
            onClick={() => claimReward()}
            disabled={check}
          >
            ACCEPT
          </button>
        )}
      </div>
    </div>
  );
};

export default Claim;
