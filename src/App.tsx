import goalsImg from "./assets/goals.jpg";
import TestHeader from "./TestHeader/testHeader";
import OwnInput from "./Input2/index";

import "./index.css";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <TestHeader image={{ src: goalsImg, alt: "A list of goals" }} />
      <OwnInput />
    
    </div>
  );
};

export default App;
