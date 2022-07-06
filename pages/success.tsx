import React from "react";
import SuccessForm from "../components/SuccessForm";
import Topbars from "../components/Topbars";

const success = () => {
  return (
    <div className="bg-darkbg min-h-screen">
      <Topbars />
      <div className="flex justify-center w-full px-16 relative">
        <SuccessForm />
      </div>
    </div>
  );
};

export default success;
