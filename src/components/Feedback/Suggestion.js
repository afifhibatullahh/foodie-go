import { useRouter } from "next/navigation";
import React from "react";

function Suggestion({ suggestion }) {
  const router = useRouter();

  console.log("suffe", suggestion);
  return (
    <ul class="bg-white border border-gray-100 w-full mt-2 rounded-3xl overflow-hidden">
      {suggestion.map((s) => {
        return (
          <li
            onClick={() => router.push(`/food/list?q=${s.search_value}`)}
            class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-sky-50 hover:text-gray-900"
          >
            <svg
              class="absolute w-4 h-4 left-2 top-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            {s.display}
          </li>
        );
      })}
    </ul>
  );
}

export default Suggestion;
