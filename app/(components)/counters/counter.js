"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="flex w-full justify-center border">
        <div className="flex items-center gap-4 border flex-grow justify-center p-2">
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <button className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter +1)}>+1</button>
            <button className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter +5)}>+5</button>
            <button className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter +10)}>+10</button>
          </div>
          <div className="text-center">
            <h1>Counter Name</h1>
            <div>{counter}</div>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <button  className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter - 1)}>-1</button>
            <button  className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter - 5)}>-5</button>
            <button  className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter - 10)}>-10</button>
          </div>
        </div>
        <div className="flex flex-col ml-auto justify-between">
          <button>reset</button>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
