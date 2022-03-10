import './App.css';
import * as React from 'react-dom';
import { NavBar } from "./components/NavBar";
import { Category } from './components/Category';

function App() {
  return (
      <div className="bg-black md:h-screen">
          <main className="container box-border w-10/12 h-3/4 mx-auto grid 
          grid-cols-1 gap-4 text-white font-mono font-normal pt-8 md:pt-48 md:grid-cols-4">
              <div className="md:row-span-2"><NavBar/></div>
              <Category type="Work" currentWeek="32hrs" lastWeek="Last Week - 36hrs" color="bg-yellow-500"/>
              <Category type="Play" currentWeek="10hrs" lastWeek="Last Week - 8hrs" color="bg-blue-300"/>
              <Category type="Study" currentWeek="4hrs" lastWeek="Last Week - 7hrs" color="bg-pink-400"/>
              <Category type="Exercise" currentWeek="4hrs" lastWeek="Last Week - 5hrs" color="bg-green-200"/>
              <Category type="Social" currentWeek="5hrs" lastWeek="Last Week - 10hrs" color="bg-purple-600"/>
              <Category type="Self Care" currentWeek="2hrs" lastWeek="Last Week - 2hrs" color="bg-yellow-300"/>
          </main>
      </div>
  );
}

export default App;
