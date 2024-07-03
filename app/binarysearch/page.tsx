"use client";

import { useState } from "react";

const Binary_Search = () => {
  const [array_value, setArray_value] = useState("");
  const [sorted_array, setsorted_array] = useState<string[]>([]);
  const handlechange = (event: any) => {
    setArray_value(event?.target.value);
  };

  const handlesort = () => {
    if (array_value.split(" ").length > 2) {
      const compare = (a, b) => {
        return a - b;
      };
      setsorted_array(array_value.split(" ").sort(compare));
    }
  };
  return (
    <div>
      <div>
        <div>
          <input
            className="bg-transparent border-2 border-white rounded-md p-2 outline-none"
            onChange={handlechange}
          />
          <button
            className={`p-2 border-2 border-white rounded-md ${
              array_value.split("").length > 2
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={handlesort}
          >
            Sort Array
          </button>
        </div>
        <div className=" flex gap-4 pt-10">
          {sorted_array.map((sorted_number, index) => (
            <div key={index} className="text-lg text-white">
              {sorted_number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Binary_Search;
