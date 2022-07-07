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
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
            First Slide
          </span>
          <img
            src="/docs/images/carousel/carousel-1.svg"
            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-2.svg"
            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-3.svg"
            className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-14 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-700 dark:group-hover:bg-violet-500 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-14 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-700 dark:group-hover:bg-violet-500 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default VoteForm;
