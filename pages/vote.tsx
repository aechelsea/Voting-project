import React from "react";
import Topbars from "../components/Topbars";
import VoteForm from "../components/VoteForm";

const Vote = () => {
  return (
    <div className="bg-darkbg min-h-screen">
      <Topbars />
      <div className="่justify-center w-full px-16 relative">
        <VoteForm />
      </div>
    </div>
  );
};

export default Vote;
