import React, { useEffect, useState } from "react";
import { getEthereum, getWalletAddress } from "../services/wallet-services";

const Topbars = () => {
  const [address, setAddress] = useState<string | null>(null);
  const accountData = async () => {
    const addr = getWalletAddress();
    setAddress(addr);
  };

  useEffect(() => {
    accountData();
    const handleAccountChange = (addresses: string[]) => {
      setAddress(addresses[0]);
      accountData();
    };
    getEthereum()?.on("accountsChanged", handleAccountChange);
  });
  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-darkbg">
      <div className="flex">
        <img
          src="/mgt.png"
          alt="mgt-logo"
          className="hidden sm:block md:w-[210px] md:h-[90px] sm:w-[210px] sm:h-[90px] w-[130px] h-[48px] md:-ml-16 -ml-16"
        />
        <div className="lg:mt-6 md:mt-6 sm:mt-6">
          <button
            className="rounded-xl mt-4 ml-auto md:px-8 sm:px-8 px-2 py-1 bg-orange-400  text-white md:text-base text-xs font-bold "
            onClick={() => (location.href = "/winner")}
          >
            Claim
          </button>
        </div>
      </div>
      <img
        className="ml-auto -mr-6 mt-3 z-0"
        src="MetaMask-Logo.png"
        alt="eth"
        width="64px"
      />
      <div className="rounded-full md:px-8 sm:px-8 px-2 py-1 mt-4 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-base text-xs font-bold  flex items-center justify-center ">
        <p className="my-2">{address?.slice(0, 5) + `...` + address?.slice(-4)}</p>
      </div>
      <footer className="fixed bottom-0 inset-x-0 text-center mb-2 md:text-xl text-sm text-white">
        Power by: Finstable-Trainee1
      </footer>
    </nav>
  );
};

export default Topbars;
