import { useEffect } from "react";
import './App.css';
import { runAnimation } from "./utils/animation"; 

function App() {
   useEffect(() => {
    runAnimation();
  }, []);

  return (
    <div className="App">
      <canvas id="galaxyCanvas"></canvas>
    </div>
  );
}

export default App;
