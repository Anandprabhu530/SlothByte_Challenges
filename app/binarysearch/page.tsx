"use client";

import { useState } from "react";

const Binary_Search = () => {
  const [array_value, setArray_value] = useState("");
  const [sorted_array, setsorted_array] = useState<string[]>([]);
  const [value_to_find, setValue_to_find] = useState("");
  const [found, setFound] = useState(-2);
  const handlechange = (event: any) => {
    setArray_value(event?.target.value);
  };

  const handlesort = () => {
    if (array_value.trim().split(" ").length > 2) {
      const compare = (a: any, b: any) => {
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
      if (
        sorted_array[mid] === value_to_find &&
        sorted_array[mid - 1] !== value_to_find
      ) {
        setFound(mid);
        return;
      } else if (sorted_array[mid] >= value_to_find) {
        end = mid - 1;
      } else if (sorted_array[mid] <= value_to_find) {
        start = mid + 1;
      }
    }
    setFound(-1);
  };
  return (
    <div className="h-screen w-full flex-col text-xl flex items-center pt-8">
      Given a sorted array of integers and a target integer, find the first
      occurrence of the target and return its index.
      <div className="flex items-center justify-center h-full">
        <div>
          <div>
            <div className="pb-6 text-xl">
              Enter the number with Single Space (" ")
            </div>
            <input
              className="bg-transparent border-2 border-white rounded-md py-1 px-2 outline-none"
              onChange={handlechange}
            />
            <button
              className={`px-2 py-1 ml-6 text-lg text-black hover:bg-[#979798] rounded-md bg-[#ffffff] ${
                array_value.split("").length > 2
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
              onClick={handlesort}
            >
              Sort Array
            </button>
          </div>
          {sorted_array.length !== 0 && (
            <div>
              <div className=" pt-10 pb-2 text-xl">Sorted Array</div>
              <div className="flex gap-[6px]">
                {sorted_array.map((sorted_number, index) => (
                  <div
                    key={index}
                    className="text-lg text-white rounded-md border-2 border-white px-2"
                  >
                    {sorted_number}
                  </div>
                ))}
              </div>
            </div>
          )}
          {sorted_array.length !== 0 && (
            <div className="pt-10 flex flex-col gap-4">
              <div className="text-xl">Enter the number to search</div>
              <div className="flex gap-6">
                <input
                  className="border-2 border-white rounded-md bg-transparent outline-none px-2 py-1 w-fit"
                  onChange={handlefindchange}
                />
                <button
                  className="px-2 py-1 text-lg text-black hover:bg-[#979798] rounded-md bg-[#ffffff]"
                  onClick={handlefind}
                >
                  Find
                </button>
              </div>
            </div>
          )}
          {sorted_array.length !== 0 && found !== -2 ? (
            <div>
              {found === -1 ? (
                <div className="text-xl font-semibold text-red-500 pt-6">
                  Oops! Element not found, Check the array!
                </div>
              ) : (
                <div className="text-xl pt-6">
                  First occurace of element found at index
                  <span className="font-semibold text-red-500"> {found}</span>
                </div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Binary_Search;
