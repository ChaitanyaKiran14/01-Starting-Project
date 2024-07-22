import CourseGoal from "./CourseGoal";
import { ExampleNavbarThree } from "./Header/header";
import goalsImg from "./assets/goals.jpg";
import TestHeader from "./TestHeader/testHeader";

import "./index.css";
const App = () => {
  return (
    <div>
      <ExampleNavbarThree />
      <TestHeader image={{ src: goalsImg, alt: "A list of goals" }}/>
      <CourseGoal title="Learn ReactJS wittth TS" description="Almost There" />
    </div>
  );
};

export default App;
