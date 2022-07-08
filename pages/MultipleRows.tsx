import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderData } from "../constants/SliderData";
const MultipleRows = (slides: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="sm:w-56 sm:h-72 md:w-72 md:h-96 bg-lightbg border border-bdbox1 rounded-3xl">
                <img
                  src={slide.image}
                  alt="travel image"
                  className="sm:w-28 sm:h-28 md:h-48 md:w-48 h-28 w-28 object-cover object-top rounded-full mx-auto mt-8 border border-purple-500"
                />
                <p className="text-center md:text-base text-xs font-bold text-torange mt-6">
                  {slide.number}
                </p>
                <div className="flex justify-center">
                  <button className="rounded-full transition duration-300 hover:scale-110 md:text-xl text-xs font-bold px-8 -py-1 mb-2 md:px-10 sm:px-8 mt-8 bg-gradient-to-b from-indigo-500 to-darkblue-500 hover:bg-purple-700 border-2 border-bdpurple  text-white ">
                    Vote
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default MultipleRows;
