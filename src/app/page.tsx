"use client";
import { useState } from "react";
import Button from "../components/Button";
import { Tasks } from "@/components/Tasks";

export default function Page() {
  const [message, setMessage] = useState("lets learn more about test in React");

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Hello World</h1>

      <p>{message}</p>

      <Button
        disabled={false}
        onClick={() => setMessage("I am learning more about testing in React")}
      >
        {"Change Message"}
      </Button>

    </div>
  );
}
