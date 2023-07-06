import Image from "next/image";
import React from "react";
import datas from "./data";

export const Footer = () => {
  return (
    <div>
      <h2 className="p-5 text-4xl font-bold text-slate-800">
        Recommendation for you 🍕🍕
      </h2>
      <div className="mb-32 grid gap-1 grid-cols-1 lg:mb-0 md:grid-cols-2 lg:grid-cols-4 text-left">
        {datas.results.map((data) => {
          return (
            <a
              href={`/details/${data.item.id}`}
              className="group rounded-lg border md:max-w-xs  border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <h2
                className={`mb-3 text-2xl font-semibold truncate text-slate-700`}
              >
                {data.item.name}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              {data?.item?.beauty_url && (
                <Image
                  alt={data.item.name}
                  className="float-left h-16 object-cover rounded-md mr-2"
                  src={data.item.beauty_url}
                  width={100}
                  height={50}
                />
              )}
              <p className={`m-0 text-sm opacity-50 line-clamp-3`}>
                {data.item.description}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};
