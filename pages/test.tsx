import React from "react";

const test = () => {
  return (
    <div className="justify-center">
      <div className="items-center">
        <img
          title="object-left-top"
          className="mx-auto bg-gree-200 w-24 h-24 border-4 my-4"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20190807114330/GFG115.png"
        />
      </div>
      <div></div>
      <p className="text-3xl font-bold text-black text-center mt-16 mb-7">
        Connect to <a className="text-darkorange">Metamask</a>
      </p>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/bangkok.webp"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
