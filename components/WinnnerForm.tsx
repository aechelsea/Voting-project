import React, { useEffect, useState } from "react";
import { getProvider, getSigner } from "../services/wallet-services";
import { Vote__factory } from "../typechain";
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

const WinnnerForm = () => {
  const [total, setTotal] = useState('')
  const [winner, setWinner] = useState('')

  const winningCount = async () => {
    const signer = getSigner();
    const winning = Vote__factory.connect(
      "0x05A4FD94BF6258bd84A945fE44fBa3A8401BF87E",
      getProvider()
    ).connect(signer);
    const countWinner = await (await winning.winnerVoteCount()).toString();
    const winnerName = await winning.winner()
    setTotal(countWinner);
    setWinner(winnerName)
  }



  console.log('total', total);
  useEffect(() => {
    winningCount()
  }, [])

  const cardWinner = () => {
    return data.map((item, index) => {
      if (item.name == winner) {
        return (
          <div key={index}>
            <img
              src={item.image}
              className="md:h-48 md:w-48 h-32 w-32 object-cover object-top rounded-full mx-auto mt-8 border border-white"
              alt="Miss-phrae"
            />
            <p className="text-center font-bold text-torange mt-6 border-b-2 border-bdpurple">
              {item.number}
            </p>
          </div>
        )
      }
    })
  }

  return (
    <div className="justify-center px-16 p-8 w-72 md:w-96 bg-bluebg border border-bdpurple rounded-3xl mt-8">
      <h1 className="text-center font-bold italic text-3xl text-fuchsia-500 border-x-amber-600 border-bdpurple mb-2">
        The winner
      </h1>
      <div className="flex justify-center">
        <div className="w-96 h-80 md:w-64 md:h-96 bg-lightbg border border-bdbox1 rounded-3xl">
          <div>
            {cardWinner()}
            <p className="text-left ml-2 md:ml-10 font-bold text-gray-300 text-lg">
              Score: {total}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              className="rounded-full text-sm font-bold px-8 py-1 md:py-2 sm:px-8 bg-green-400 hover:bg-purple-700 border-2 border-bdpurple  text-white "
              onClick={() => (location.href = "/claim")}
            >
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnnerForm;
