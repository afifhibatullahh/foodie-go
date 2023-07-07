import React from "react";

function CardSkeleton() {
  return (
    <div class="border w-full overflow-hidden border-gray-200 rounded-xl shadow animate-pulse">
      <div class="w-[400px] flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
      <div className="p-2">
        <div class="h-2.5 px-6 py-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 mb-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <span class="sr-only">Loading. ..</span>
      </div>
    </div>
  );
}

export default CardSkeleton;
