import React from "react";
import "./global.css";
import Todo from "./Todo";

const App = () => {
  return (
    <div className="mt-10 absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="block mx-auto p-4 bg-white shadow-lg rounded-lg w-96">
        <h1 class="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground dark:text-white md:text-5xl/[1.1]">
          Todo App Made With React
        </h1>
        <Todo />
      </div>
    </div>
  );
};

export default App;
