import React from "react";

const WinnnerForm = () => {
  return (
    <div className="justify-center px-16 p-8 w-72 md:w-96 bg-bluebg border border-bdpurple rounded-3xl">
      <h1 className="text-center font-bold italic text-3xl text-fuchsia-500 border-x-amber-600 border-bdpurple mb-2">
        The winner
      </h1>
      <div className="flex justify-center">
        <div className="w-96 h-80 md:w-64 md:h-96 bg-lightbg border border-bdbox1 rounded-3xl">
          <img
            src="phrae.webp"
            className="md:h-48 md:w-48 h-32 w-32 object-cover object-top rounded-full mx-auto mt-8 border border-white"
            alt="Miss-phrae"
          />
          <p className="text-center font-bold text-torange mt-6 border-b-2 border-bdpurple">
            MGT41 - มิสแกรนด์แพร่
          </p>
          <p className="text-left ml-2 md:ml-10 font-bold text-gray-300 text-lg">
            Score:
          </p>
          <div className="flex justify-center">
            <button className="rounded-full text-sm font-bold px-8 py-1 md:py-2 sm:px-8 mt-4 bg-green-400 hover:bg-purple-700 border-2 border-bdpurple  text-white ">
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnnerForm;
