import React from "react";

const VoteForm = () => {
  return (
    <div className="p-8 bg-bluebg border border-bdpurple rounded-3xl">
      <h1 className="font-bold italic md:text-3xl text-sm pb-5 text-fuchsia-500 border-b-2 border-bdpurple">
        Which is your favorite miss grand thailand?
      </h1>
      <p className="text-center md:text-lg text-sm text-blue-500 pb-2 mt-2">
        Choose the person
      </p>
      <div className="flex flex-col sm:flex-row justify-around">
        <div className="sm:w-56 sm:h-72 md:w-72 md:h-96 bg-lightbg border border-bdbox1 rounded-3xl">
          <img
            src="phrae.webp"
            className="sm:w-28 sm:h-28 md:h-48 md:w-48 h-28 w-28 object-cover object-top rounded-full mx-auto mt-8 border border-purple-500"
            alt="Miss-phrae"
          />
          <p className="text-center md:text-base text-xs font-bold text-torange mt-6">
            MGT41 - มิสแกรนด์แพร่
          </p>
          <div className="flex justify-center">
            <button className="rounded-full md:text-xl text-xs font-bold px-8 -py-1 mb-2 md:px-10 sm:px-8 mt-8 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white ">
              Vote
            </button>
          </div>
        </div>
        <div className="sm:w-56 sm:h-72 md:w-72 md:h-96 bg-lightbg border border-bdbox2 rounded-3xl">
          <img
            src="chumpon.webp"
            className="sm:w-28 sm:h-28 md:h-48 md:w-48 h-28 w-28 object-cover object-top rounded-full mx-auto mt-8 border border-purple-500"
            alt="Miss-chumpon"
          />
          <p className="text-center md:text-base text-xs font-bold text-torange mt-6">
            MGT12 - มิสแกรนด์ชุมพร
          </p>
          <div className="flex justify-center">
            <button className="rounded-full md:text-xl text-xs font-bold px-8 -py-1 mb-2 md:px-10 sm:px-8 mt-8 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white ">
              Vote
            </button>
          </div>
        </div>
        <div className="sm:w-56 sm:h-72 md:w-72 md:h-96 bg-lightbg border border-bdbox3 rounded-3xl">
          <img
            src="bangkok.webp"
            className="sm:w-28 sm:h-28 md:h-48 md:w-48 h-28 w-28 object-cover object-top rounded-full mx-auto mt-8 border border-purple-500"
            alt="Miss-bangkok"
          />
          <p className="text-center md:text-base text-xs font-bold text-torange mt-6">
            MGT01 - มิสแกรนด์ กรุงเทพมหานคร
          </p>
          <div className="flex justify-center">
            <button className="rounded-full md:text-xl text-xs font-bold px-8 -py-1 mb-2 md:px-10  sm:px-8  sm:mt-4 md:mt-2 lg:mt-8 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white ">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteForm;
