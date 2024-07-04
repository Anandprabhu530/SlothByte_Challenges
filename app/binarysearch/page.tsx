"use client";

import { useState } from "react";

const Binary_Search = () => {
  const [array_value, setArray_value] = useState("");
  const [sorted_array, setsorted_array] = useState<string[]>([]);
  const [value_to_find, setValue_to_find] = useState("");
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

  const handlefindchange = (event: any) => {
    setValue_to_find(event?.target.value);
  };

  const handlefind = () => {
    let start = 0;
    let end = sorted_array.length - 1;
    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (sorted_array[mid] === value_to_find) {
        console.log(mid);
        return;
      } else if (sorted_array[mid] > value_to_find) {
        end = mid - 1;
      } else if (sorted_array[mid] < value_to_find) {
        start = mid + 1;
      }
    }
    console.log(-1);
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
        <div className=" pt-10 pb-2 text-xl">Sorted Array</div>

        <div className="flex gap-1">
          {sorted_array.map((sorted_number, index) => (
            <div
              key={index}
              className="text-lg text-white border-2 border-white px-2"
            >
              {sorted_number}
            </div>
          ))}
        </div>
        <div className="pt-10 flex flex-col gap-4">
          <div className="text-xl">Enter the number to search</div>
          <input
            className="border-2 border-white rounded-md bg-transparent outline-none p-2 w-fit"
            onChange={handlefindchange}
          />
          <button
            className="p-2 border-white border-2 rounded-md w-fit"
            onClick={handlefind}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
};

export default Binary_Search;
