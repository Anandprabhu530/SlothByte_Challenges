"use client";

import { useState } from "react";

const Character_Increment = () => {
  const [value, setValue] = useState<string>("");
  const handleKeyDown = (event) => {
    const key = event.key;

    // Handle backspace
    if (key === "Backspace") {
      setValue((prevValue) => {
        if (prevValue.length === 0) return "";
        return prevValue.slice(0, -1); //
      });
    } else {
      console.log(event.key.charCodeAt(0));
      const input = event.key;
      if (
        (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) ||
        (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90)
      ) {
        const newChar = String.fromCharCode(input.charCodeAt(0) + 1);
        setValue((prevValue) => prevValue + newChar);
      } else {
        const newChar = String.fromCharCode(input.charCodeAt(0));
        setValue((prevValue) => prevValue + newChar);
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-screen items-center p-6">
      <div className="text-2xl">Change Every Letter to the Next Letter</div>
      <div className="flex gap-16 h-full items-center justify-center">
        <div className="basis-1/2 flex justify-end">
          <div className="flex flex-col">
            <div className="text-lg pb-6">Please enter input here</div>
            <input
              className="bg-transparent border border-white p-2 rounded-md"
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className="basis-1/2">
          <div className="pb-6 text-lg ">Your Incremented value</div>
          <div className="p-2 border-2 rounded-md border-white w-[300px] h-[45px]">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character_Increment;
