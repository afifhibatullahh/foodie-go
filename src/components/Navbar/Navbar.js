"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between mb-16 md:mb-20 font-mono text-sm lg:flex">
      <p
        onClick={() => router.push("/")}
        className="fixed cursor-pointer left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:scale-110 transition-all group"
      >
        Food
        <code className="font-mono font-bold group-hover:rotate-12 transition-all ">
          .ie
        </code>
      </p>
      <div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://afifhibatullah.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By <code className="font-mono font-bold">afif</code>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
