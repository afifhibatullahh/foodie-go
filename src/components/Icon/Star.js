import React from "react";

function Star({ id = 1, stop_color1 = 100, stop_color2 = 0 }) {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-4 h-4 text-red-500"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id={`grad${id}`}>
          <stop offset={`${stop_color1}%`} stop-color="currentColor" />
          <stop offset={`${stop_color2}%`} stop-color="white" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#grad${id})`}
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      ></path>
    </svg>
  );
}

export default Star;
