"use client";
import { SetStateAction, useEffect, useState } from "react";

const Boxmaker = () => {
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState<string | any>("");
  const [error, setError] = useState<string>("");
  const handleChange = (event: any) => {
    const value = event.target.value;
    if (error) setError("");
    if (isNaN(value)) {
      setError("Please Enter a valid number");
    } else {
      setData(event?.target.value);
    }
  };

  useEffect(() => {
    let temp = "";
    for (let i = 0; i < data; i++) {
      for (let j = 0; j < data; j++) {
        if (i == 0 || i == data - 1) temp += "#";
        else if (j == 0 || j == data - 1) temp += "#";
        else temp += " ";
      }
      temp += " \n";
    }
    setDisplay(<pre>{temp}</pre>);
  }, [data]);

  return (
    <div className="flex flex-col w-full h-screen items-center p-6">
      <div className="text-lg pb-10">
        Please Enter a number to display the grid
      </div>
      <input
        className="bg-transparent p-2 border-2 rounded-md border-white"
        onChange={handleChange}
      />
      <div
        style={{ whiteSpace: "pre-wrap" }}
        className="text-white text-xl pt-10"
      >
        {error.length !== 0 && (
          <div className="text-xl text-red-500">{error}</div>
        )}
        {display}
      </div>
    </div>
  );
};

export default Boxmaker;
