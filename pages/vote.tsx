import React, { useEffect, useState } from "react";
import Topbars from "../components/Topbars";
import VoteForm from "../components/VoteForm";
import { getEthereum, getWalletAddress } from "../services/wallet-services";

const Vote = () => {
  const [address, setAddress] = useState<string | null>(null);
  const accountData = async () => {
    const addr = getWalletAddress(); //user address
    // console.log(addr);
    setAddress(addr);
  };
  useEffect(() => {
    accountData();
    //show realtime
    const handleAccountChange = (addresses: string[]) => {
      setAddress(addresses[0]);
      accountData();
    };
    getEthereum()?.on("accountsChanged", handleAccountChange);
  });
  return (
    <div className="bg-darkbg min-h-screen">
      <Topbars />
      <div className="่flex justify-center w-full px-16">
        <VoteForm />
      </div>
    </div>
  );
};

export default Vote;
