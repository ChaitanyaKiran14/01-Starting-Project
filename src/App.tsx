import CourseGoal from "./CourseGoal";

import goalsImg from "./assets/goals.jpg";
import TestHeader from "./TestHeader/testHeader";

import "./index.css";
const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <TestHeader image={{ src: goalsImg, alt: "A list of goals" }} />
      <CourseGoal title="Learn ReactJS with TS" description="Almost There" />
    </div>
  );
};

export default App;
