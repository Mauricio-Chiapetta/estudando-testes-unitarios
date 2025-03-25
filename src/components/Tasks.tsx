'use client'
import { useState } from "react";
import Button from "./Button";
import axios from "axios";

interface Task {
  userId: number;
  id: number;
  title: string;
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const[errorMessage, setErrorMessage] = useState<null | string>(null)

  const handleClick = async () => {
    try{
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTasks(data);
      setErrorMessage(null)

    }catch(error: any){
        setErrorMessage(error.message)
    }
    
  };

  return (
    <div className="space-y-4">     
      <h1 className="text-4xl font-bold">Get Tasks from Api</h1>
      <Button onClick={handleClick}>Get Tasks from Api</Button>

      <ul className="space-y-2">
        {tasks.length > 0 &&
        tasks.map((task) => (
          <div key={task.id}>
            <li className="text-sm text-cyan-200">ID: {task.id} </li>
            <li className="text-gray-300 font-semibold">{task.title}</li>
          </div>
        ))
        }
        <p className="text-6xl text-red-500 font-extrabold">{errorMessage}</p>  
      </ul>
    </div>
  );
}
