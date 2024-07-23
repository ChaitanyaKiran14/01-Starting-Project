import { useState } from "react";
import GoalList from "../CourseGoalList/goalList";

type OwnGoal = {
  id: number;
  goalTitle: string;
  goalDescription: string;
};

const OwnInput = () => {
  const [goals, setGoals] = useState<OwnGoal[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const sub = () => {
    setGoals((prevGoals) => {
      const newGoal: OwnGoal = {
        id: Math.random(),
        goalTitle: title,
        goalDescription: description,
      };
      return [...prevGoals, newGoal];
    });
    setTitle(""); 
    setDescription(""); 
  };

  return (
    <div>
        <div className="mt-3 flex w-full items-center space-x-2 md:w-1/3">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Title"
        value={title} onChange={(event) => setTitle(event.target.value)}
      ></input>

      <input
        className="ml-2 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Description"
        value={description} onChange={(event) => setDescription(event.target.value)}
        
      ></input>



      <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" type="button" onClick={sub}>
        Submit
      </button>

      
    </div>
        <GoalList goals={goals} />
    </div>
    
  );
};

export default OwnInput;
