import React from "react";

const VoteForm = () => {
  return (
    <div className="p-8 bg-bluebg border border-bdpurple rounded-3xl">
      <h1 className="font-bold italic text-3xl pb-5 text-fuchsia-500 border-b-2 border-bdpurple">
        Which is your favorite miss grand thailand?
      </h1>
      <p className="text-center text-lg text-blue-500 pb-2 mt-2">
        Choose the person
      </p>
      <div className="flex justify-around">
        <div className="w-72 h-96 bg-lightbg border border-bdbox1 rounded-3xl">
          <img
            src="phrae.webp"
            className="h-48 w-48 rounded-full mx-auto mt-8 border border-white"
            alt="Miss-phrae"
          />
          <p className="text-center font-bold text-torange mt-6">
            MGT41 - มิสแกรนด์แพร่
          </p>
          <div className="flex justify-center">
            <button className="rounded-full bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-xl text-xs font-bold md:px-10 py-3 sm:px-8 mt-8">
              Vote
            </button>
          </div>
        </div>
        <div className="w-72 h-96 bg-lightbg border border-bdbox2 rounded-3xl">
          <img
            src="chumpon.webp"
            className="h-48 w-48 rounded-full mx-auto mt-8 border border-white"
            alt="Miss-chumpon"
          />
          <p className="text-center font-bold text-torange mt-6">
            MGT12 - มิสแกรนด์ชุมพร
          </p>
          <div className="flex justify-center">
            <button className="rounded-full bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-xl text-xs font-bold md:px-10 py-3 sm:px-8 mt-8">
              Vote
            </button>
          </div>
        </div>
        <div className="w-72 h-96 bg-lightbg border border-bdbox3 rounded-3xl">
          <img
            src="bangkok.webp"
            className="h-48 w-48 rounded-full mx-auto mt-8 border border-white"
            alt="Miss-bangkok"
          />
          <p className="text-center font-bold text-torange mt-6">
            MGT01 - มิสแกรนด์ กรุงเทพมหานคร
          </p>
          <div className="flex justify-center">
            <button className="rounded-full bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white md:text-xl text-xs font-bold md:px-10 py-3 sm:px-8 mt-8">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteForm;
