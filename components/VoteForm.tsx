import React, { useEffect, useRef, useState } from "react";
import { Skeleton } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Vote__factory } from "../typechain";
import { getProvider, getSigner } from "../services/wallet-services";
import { toast } from "react-toastify";

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

const VoteForm = () => {
  const [check, setCheck] = useState(true);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0)
  const [time, setTime] = useState(0);

  const Voter = async (id: number) => {
    const signer = getSigner();
    const vote = Vote__factory.connect(
      "0x05A4FD94BF6258bd84A945fE44fBa3A8401BF87E",
      getProvider()
    ).connect(signer);
    // console.log('vote',await (await vote.getReward()).toString());
    const tx = await vote.vote(id);
    console.log("id", id);
    console.log("tx", tx);
    toast.success("Thank you for voting");
  };

  const getTimestamp = async () => {
    const signer = getSigner();
    const vote = Vote__factory.connect(
      "0x05A4FD94BF6258bd84A945fE44fBa3A8401BF87E",
      getProvider()
    ).connect(signer);
    const timestamp = await vote.getTimestamp();
    const timeCurrent = new Date().valueOf();
    console.log('time current', timeCurrent);
    const time = timestamp.mul(10 ** 3).toNumber();
    setTimeout (()=>{setTime(time)},2000)
  };

  useEffect(() => {
    const countDownDate = time;
    var x = setInterval(function () {
      if(countDownDate){
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var day = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var second = Math.floor((distance % (1000 * 60)) / 1000);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
        setDays(day)
        console.log('time', days, hours, minutes, seconds);
      }
    }, 1000);
    return () => {
      clearInterval(x);
    }
  }, [time])

  const checkVote = async () => {
    const signer = getSigner();
    const vote = Vote__factory.connect(
      "0x05A4FD94BF6258bd84A945fE44fBa3A8401BF87E",
      getProvider()
    ).connect(signer);
    const check = await (await vote.voters(await signer.getAddress())).voted;
    console.log("check", check);
    setCheck(check);
  };


  useEffect(() => {
    checkVote();
    getTimestamp();
  }, []);

  var settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="p-8 bg-bluebg border border-bdpurple rounded-3xl">
      <h1 className="flex font-bold italic md:text-3xl text-sm pb-5 text-fuchsia-500 border-b-2 border-bdpurple">
        Which is your favorite miss grand thailand ?
        {time!=0 ? (
          <p className="text-white text-xl ml-auto">
            {days} Days {hours}:{minutes}:{seconds}
          </p>
        ) :
          (
            <Skeleton.Input active className="ml-auto rounded-md"/>
        )}

      </h1>
      <p className="text-center md:text-lg text-sm text-blue-500 pb-2 mt-2">
        Choose the person
      </p>
      <Slider {...settings}>
        {data.map((detail, index) => (
          <div key={index} className="flex flex-col sm:flex-row ml-2 md:ml-28">
            <div className="w-28 h-64 sm:w-28 sm:h-64 md:w-40 md:h-80 lg:w-60 lg:h-96 xl:w-72 xl:h-96 bg-lightbg border border-bdbox1 rounded-3xl">
              <img
                src={detail.image}
                className="h-28 w-24 sm:w-28 sm:h-24 md:h-36 md:w-36 lg:w-48 lg:h-48  object-cover object-top rounded-full mx-auto mt-8 border border-purple-500"
                alt="image"
              />
              <p className="text-center md:text-base text-xs font-bold text-torange mt-6">
                {detail.number}
              </p>
              <div className="flex justify-center">
                <button
                  className={`fixed bottom-5 rounded-full transition duration-300  md:text-xl text-xs font-bold px-8 -py-1 md:px-10 sm:px-8 mt-8 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white 
                ${check
                      ? "cursor-not-allowed bg-gradient-to-b from-gray-500 to-gray-500 hover:bg-gray-400 text-gray-600"
                      : "hover:scale-110 cursor-pointer"
                    }`}
                  onClick={() => Voter(detail.id)}
                  disabled={check}
                  type="button"
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VoteForm;
