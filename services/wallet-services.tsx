import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const getEthereum = () => {
  if (typeof window.ethereum !== 'undefined') {
    return window.ethereum;
  }
  return null;
}

// export const getProvider = () => {
//   const ethereum = getEthereum();
//   if (ethereum) {
//     return new ethers.providers.Web3Provider(getEthereum());
//   }
//   return null;
// };

export const getProvider = () => {
  // const url = https://rpc.bitkubchain.io;
  const url = `https://rpc-testnet.bitkubchain.io`;
  return new ethers.providers.JsonRpcProvider(url);
};

export const getSigner = () => {
  const eth = getEthereum();
  const provider = new ethers.providers.Web3Provider(eth);
  return provider.getSigner();
};

export const connectWallet = () => {
  return getEthereum()?.request({
    method: "eth_requestAccounts",
  }) as Promise<string>;
};

export const getWalletAddress = () => {
  return getEthereum()?.selectedAddress as string;
};

export const getChainId = () => {
  return getEthereum()?.request({ method: "eth_chainId" }) as Promise<string>;
};

export const getBalance = (address: string) => {
  const provider = getProvider();
  return provider?.getBalance(address);
};
