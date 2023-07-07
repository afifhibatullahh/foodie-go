"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Suggestion from "../Feedback/Suggestion";
import { GET_AUTO_COMPLETE } from "@/utils/meal";

const debounce = (func, wait) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Banner = () => {
  const [results, setResults] = useState([]);

  const inputElem = useRef(null);

  const fetchFoodResults = async (inputVal) => {
    try {
      if (inputVal !== "") {
        console.log(inputVal);
        const { data } = await GET_AUTO_COMPLETE(`?prefix=${inputVal}`);
        setResults(data?.results.slice(0, 8) ?? []);
        console.log(data);
      } else {
        setResults([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearch = useCallback(
    debounce((inputVal) => fetchFoodResults(inputVal), 300),
    []
  );

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
              name="q"
              required
              ref={inputElem}
              onChange={() => handleSearch(inputElem.current?.value)}
              type="text"
              className=" rounded-full p-4 pr-[7rem] focus:outline-none w-full ring-2 ring-sky-400 focus:ring-sky-500 focus:ring-4 transition duration-400"
              placeholder="Search here ....."
            />
            <button
              type="submit"
              className="absolute right-1 text-sm bg-primary py-3 px-6 rounded-full text-white poppins bg-sky-700 ring-sky-300 transition duration-300 hover:scale-105 transform"
            >
              Search
            </button>
          </div>
          {results.length > 0 && <Suggestion suggestion={results} />}
        </form>
      </div>
    </section>
  );
};

export default Banner;
