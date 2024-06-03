"use client";

import { increment } from "./lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./lib/hooks";

export default function Page() {
  const counter=useAppSelector((state) => state.counter);
  const despatch = useAppDispatch();

  console.log(counter);
  return (
    <div>

      <button onClick={() => {
        despatch(increment())
        // console.log(counter);
      }}>Add</button>
    </div>
  );
}