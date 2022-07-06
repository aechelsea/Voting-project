import type { NextPage } from "next";
import ConnectForm from "../components/ConnectForm";
import Topbar from "../components/Topbar";
import Topbars from "../components/Topbars";
import VoteForm from "../components/VoteForm";

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
