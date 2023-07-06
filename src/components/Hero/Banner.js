import React from "react";

const Banner = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
          Best food waiting for your belly
        </h1>

        <div className="relative rounded-full box-border mt-8 w-64 sm:w-96 flex items-center">
          <input
            type="text"
            className=" rounded-full p-4 pr-[7rem] focus:outline-none w-full ring-2 ring-sky-400 focus:ring-sky-500 focus:ring-4 transition duration-400"
            placeholder="Search here ......."
          />
          <button className="absolute right-1 text-sm bg-primary py-3 px-6 rounded-full text-white poppins bg-sky-700 ring-sky-300 transition duration-300 hover:scale-105 transform">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
