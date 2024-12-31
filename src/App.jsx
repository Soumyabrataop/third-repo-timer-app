import React from "react";
import Toggle from "./toggle.jsx";
import "./global.css";

const App = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-black dark:bg-[linear-gradient(to_right,#292924_1px,transparent_1px),linear-gradient(to_bottom,#292924_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <Toggle />
      <div className="flex justify-center items-center h-screen text-center">
        <div className="text-center">
          <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground dark:text-white md:text-5xl/[1.1]">
            Beautiful UI components built with Tailwind CSS and Next.js.
          </h1>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Search..."
              className="dark:text-white dark:bg-black w-full max-w-md p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md dark:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
