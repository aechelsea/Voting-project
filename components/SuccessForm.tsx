import React from "react";

const data = [
  {
    id: 0,
    number: "MGT12 - มิสแกรนด์ชุมพร",
    name: "Charlotte",
    image: "chumpon.webp",
  },
  {
    id: 1,
    number: "MGT01 - มิสแกรนด์กรุงเทพมหานคร",
    name: "Engfa",
    image: "bangkok.webp",
  },
  {
    id: 2,
    number: "MGT41 - มิสแกรนด์แพร่",
    name: "Marima",
    image: "phrae.webp",
  },
  {
    id: 3,
    number: "MGT03- มิสแกรนด์ กาญจนบุรี",
    name: "Prada",
    image: "kanchanaburi.webp",
  },
  {
    id: 4,
    number: "MGT42 - มิสแกรนด์ภูเก็ต",
    name: "Heidi",
    image: "phuket.webp",
  },
];

const SuccessForm = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center px-16 p-8 sm:w-96 md:w-90 w-64 bg-gradient-to-l from-lightbg to- border border-bdbox3 mt-20 ">
        <img
          className="sm:mx-auto mx-auto p-1 pl-2 pt-2  object-cover md:h-36 md:w-36 sm:w-28 sm:h-28  w-20 h-20"
          src="check.png"
          alt=""
        />
        <h1 className="md:text-lg text-sm font-bold text-white text-center my-10">
          Thank You!
          <p className="text-white text-center">Your vote has been success</p>
        </h1>
      </div>
    </div>
  );
};

export default SuccessForm;
