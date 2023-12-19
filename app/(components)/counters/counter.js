"use client";

import { useState } from "react";

const Counter = ({name,count,key}) => {
  // console.log('count',count)
  const [counter, setCounter] = useState(count);
  return (
    <>
      <div key={key} className="flex w-full justify-center">
        <div className="flex items-center gap-4 justify-center p-2">
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <button className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter +1)}>+1</button>
            <button className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter +5)}>+5</button>
            <button className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter +10)}>+10</button>
          </div>
          <div className="text-center w-32">
            <h1 className="">{name}</h1>
            <div>{counter}</div>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <button  className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter - 1)}>-1</button>
            <button  className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter - 5)}>-5</button>
            <button  className="bg-slate-200 w-10 rounded-md" onClick={()=>setCounter(counter - 10)}>-10</button>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <button onClick={()=>setCounter(0)}>reset</button>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
