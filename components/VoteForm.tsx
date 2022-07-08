import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

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
  return (
    // <div className="p-8 bg-bluebg border border-bdpurple rounded-3xl">
    //   <h1 className="font-bold italic md:text-3xl text-sm pb-5 text-fuchsia-500 border-b-2 border-bdpurple">
    //     Which is your favorite miss grand thailand ?
    //   </h1>
    //   <p className="text-center md:text-lg text-sm text-blue-500 pb-2 mt-2">
    //     Choose the person
    //   </p>
    //   <>
    //     <Swiper
    //       slidesPerView={3}
    //       spaceBetween={30}
    //       slidesPerGroup={3}
    //       loop={true}
    //       loopFillGroupWithBlank={true}
    //       pagination={{
    //         clickable: true,
    //       }}
    //       navigation={true}
    //       modules={[Pagination, Navigation]}
    //       className="mySwiper"
    //     >
    //       <SwiperSlide>
    //         <div className="flex flex-col sm:flex-row justify-around">
    //           {data.map((detail) => (
    //             <div className="sm:w-56 sm:h-72 md:w-72 md:h-96 bg-lightbg border border-bdbox1 rounded-3xl">
    //               <img
    //                 src={detail.image}
    //                 className="sm:w-28 sm:h-28 md:h-48 md:w-48 h-28 w-28 object-cover object-top rounded-full mx-auto mt-8 border border-purple-500"
    //                 alt="image"
    //               />
    //               <p className="text-center md:text-base text-xs font-bold text-torange mt-6">
    //                 {detail.number}
    //               </p>
    //               <div className="flex justify-center">
    //                 <button className="rounded-full transition duration-300 hover:scale-110 md:text-xl text-xs font-bold px-8 -py-1 mb-2 md:px-10 sm:px-8 mt-8 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white ">
    //                   Vote
    //                 </button>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </SwiperSlide>
    //     </Swiper>
    //   </>
    // </div>
    <div className="p-8 bg-bluebg border border-bdpurple rounded-3xl">
      <h1 className="font-bold italic md:text-3xl text-sm pb-5 text-fuchsia-500 border-b-2 border-bdpurple">
        Which is your favorite miss grand thailand ?
      </h1>
      <p className="text-center md:text-lg text-sm text-blue-500 pb-2 mt-2">
        Choose the person
      </p>
      <div className="flex flex-col sm:flex-row justify-around">
        {data.map((detail) => (
          <div className="sm:w-56 sm:h-72 md:w-72 md:h-96 bg-lightbg border border-bdbox1 rounded-3xl">
            <img
              src={detail.image}
              className="sm:w-28 sm:h-28 md:h-48 md:w-48 h-28 w-28 object-cover object-top rounded-full mx-auto mt-8 border border-purple-500"
              alt="image"
            />
            <p className="text-center md:text-base text-xs font-bold text-torange mt-6">
              {detail.number}
            </p>
            <div className="flex justify-center">
              <button className="rounded-full transition duration-300 hover:scale-110 md:text-xl text-xs font-bold px-8 -py-1 mb-2 md:px-10 sm:px-8 mt-8 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white ">
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteForm;
