import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
        Mutating state in React - the correct way
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        It's quite c
      </p>
      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 ">
        <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl w-1/3 m-auto">
          <span class="inline-block text-blue-500 dark:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
          </span>
          <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            The "wrong" way
          </h1>
          <p class="text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ab nulla quod dignissimos vel non corrupti doloribus voluptatum
            eveniet
          </p>
          <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white">
            {count}
          </h2>
          <button
            onClick={increment}
            class="flex my-2 mx-auto items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <svg
              class="w-5 h-5 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="mx-1">Increment Counter</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
