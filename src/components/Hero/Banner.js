"use client";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [key, setKey] = useState("");

  let isDisabled = key.length < 1;

  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
          Best{" "}
          <span className="cursor-pointer font-bold hover:animate-pulse bg-gradient-to-r from-sky-700 to-teal-400 bg-clip-text text-transparent">
            Food.ie
          </span>{" "}
          waiting for your belly
        </h1>

        <form action="/food/list" method="get">
          <div className="relative rounded-full box-border mt-8 w-64 sm:w-96 flex items-center">
            <input
              onChange={(e) => setKey(e.target.value)}
              name="q"
              type="text"
              className=" rounded-full p-4 pr-[7rem] focus:outline-none w-full ring-2 ring-sky-400 focus:ring-sky-500 focus:ring-4 transition duration-400"
              placeholder="Search here ....."
            />
            <button
              type="submit"
              disabled={isDisabled}
              className="absolute right-1 text-sm bg-primary py-3 px-6 rounded-full text-white poppins bg-sky-700 ring-sky-300 transition duration-300 hover:scale-105 transform"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Banner;
