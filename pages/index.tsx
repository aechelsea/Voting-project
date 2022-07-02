import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ConnectForm from "../components/ConnectForm";
import Topbar from "../components/Topbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-darkbg min-h-screen">
      <Topbar />
      <div className="flex justify-center w-full px-16 relative mb-14">
        <ConnectForm />
      </div>
    </div>
  );
};

export default Home;
