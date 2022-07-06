import React from "react";
import Claim from "../components/claim";
import Topbars from "../components/Topbars";

const claim = () => {
  return (
    <div className="bg-darkbg min-h-screen">
      <Topbars />
      <div className="flex justify-center w-full px-16 relative">
        <Claim />
      </div>
    </div>
  );
};

export default claim;
