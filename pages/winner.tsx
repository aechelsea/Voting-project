import React from "react";
import WinnnerForm from "../components/WinnnerForm";
import Topbars from "../components/Topbars";

const Winner = () => {
  return (
    <div className="bg-darkbg min-h-screen">
      <Topbars />
      <div className="flex justify-center w-full px-16 relative">
        <WinnnerForm />
      </div>
    </div>
  );
};

export default Winner;
