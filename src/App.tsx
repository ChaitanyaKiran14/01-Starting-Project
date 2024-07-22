import GoalList from "./CourseGoalList/goalList";
import { useState } from "react";
import { Plus } from "lucide-react";
import goalsImg from "./assets/goals.jpg";
import TestHeader from "./TestHeader/testHeader";
import "./index.css";

type Goals = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<Goals[]>([]);

  const addGoals = () => {
    setGoals((prevGoals) => {
      const newGoal: Goals = {
        id: Math.random(),
        title: "Practice Typescript",
        description: "HOPE you continue",
      };

      return [...prevGoals, newGoal];
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <TestHeader image={{ src: goalsImg, alt: "A list of goals" }} />
      <button
        type="button"
        className="m-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        title="Add"
        onClick={addGoals}
      >
        <Plus className="h-4 w-4" />
      </button>
      <GoalList goals={goals} />
    </div>
  );
};

export default App;
