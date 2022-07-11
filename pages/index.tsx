import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ConnectForm from "../components/ConnectForm";
import Topbar from "../components/Topbar";
import Topbars from "../components/Topbars";
import VoteForm from "../components/VoteForm";
import { getEthereum, getWalletAddress } from "../services/wallet-services";

const Home: NextPage = () => {
  const [address, setAddress] = useState<string | null>(null);
  const accountData = async () => {
    const addr = getWalletAddress(); //user address
    // console.log(addr);
    setAddress(addr);
  };
  useEffect(() => {
    setTimeout(()=>{
      accountData();
      //show realtime
      const handleAccountChange = (addresses: string[]) => {
        setAddress(addresses[0]);
        accountData();
      };
      getEthereum()?.on("accountsChanged", handleAccountChange);
    },1000)
  },[]);
  return (
    <div className="bg-darkbg min-h-screen">
      {address ? (
        <div>
          <Topbars />
          <div className="่flex justify-center w-full px-16">
            <VoteForm />
          </div>
        </div>
      ) : (
        <div className="bg-darkbg min-h-screen">
          <Topbar />
          <div className="flex justify-center w-full px-16 relative">
            <ConnectForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
