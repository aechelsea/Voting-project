import React from "react";

const WinnnerForm = () => {
  return (
    <div className="justify-center px-16 p-8 w-96 bg-bluebg border border-bdpurple rounded-3xl">
      <h1 className="text-center font-bold italic text-3xl pb-5 text-fuchsia-500">
        The winner
      </h1>
      <div className="flex justify-center">
        <div className="w-72 h-96 bg-lightbg border border-bdbox1 rounded-3xl">
          <img
            src="phrae.webp"
            className="h-48 w-48 rounded-full mx-auto mt-8 border border-white"
            alt="Miss-phrae"
          />
          <p className="text-center font-bold text-torange mt-6">
            MGT41 - มิสแกรนด์แพร่
          </p>
          <p className="text-center font-bold text-gray-600 text-lg">Score:</p>
          <div className="flex justify-center">
            <button className="rounded-full bg-green-400 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-lg text-xs font-bold md:px-8 py-2 sm:px-8 mt-6">
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnnerForm;
