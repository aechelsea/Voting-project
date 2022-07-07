import Link from "next/link";
import React, { useEffect, useState } from "react";
import Vote from "../pages/vote";
import { connectWallet, getWalletAddress } from "../services/wallet-services";
import Topbars from "./Topbars";
import VoteForm from "./VoteForm";

const ConnectForm = () => {
  const [address, setAddress] = useState<String | null>(null);

  console.log(address);

  useEffect(() => {
    const addr = getWalletAddress();
    setAddress(addr);
    console.log("addr", addr);
  }, []);

  return (
    <div className="max-w-md mx-auto rounded-3xl shadow-eshadow shadow-blueshadow w-1/3 py-5 px-10 mt-10 bg-lightbg">
      {address ? (
        <Link href={"/vote"}></Link>
      ) : (
        // <a href="/vote"></a>
        <div className="flex flex-col justify-center">
          <div>
            <img
              title="Click to connect metamask"
              src="/MetaMask-Logo.png"
              alt="MetaMask-logo"
              className="sm:mx-auto object-cover md:h-28 sm:w-48"
            />
            <div className="flex justify-center">
              <p className="md:text-3xl text-sm font-bold text-white text-center my-10">
                Connect to <a className="text-darkorange">Metamask</a>
              </p>
            </div>
          </div>
          <button
            className="rounded-full bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple text-center text-white md:text-xl text-xs font-bold  py-3 mt-4"
            onClick={connectWallet}
          >
            Connect
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectForm;
