"use client";
import { useState } from "react";

export default function Page() {
  const [message,setMessage] = useState("lets learn more about test in React");


  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold">Hello World</h1>

      <p>{message}</p>
      <button
        className="bg-amber-200 text-black cursor-pointer p-1 rounded-md"
        onClick={()=>setMessage("I am learning more about testing in React")}
      >
        Change Message
      </button>
    </div>
  );
}
