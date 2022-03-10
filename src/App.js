import './App.css';
import * as React from 'react-dom';
import { NavBar } from "./components/NavBar";
import { WorkSlide } from "./components/Work";
import { PlaySlide } from "./components/Play";
/*import { StudySlide } from "./components/Study";*/
import { ExerciseSlide } from "./components/Exercise";
import { SocialSlide } from "./components/Social";
import { SelfCareSlide } from "./components/SelfCare";
import { Category } from './components/Category';

function App() {
  return (
      <div className="bg-black md:h-screen">
          <main className="container box-border w-10/12 h-3/4 mx-auto grid 
          grid-cols-1 gap-4 text-white font-mono font-normal pt-8 md:pt-48 md:grid-cols-4">
              <div className="md:row-span-2"><NavBar/></div>
              <WorkSlide/>
              <PlaySlide/>
              <Category/>
              <ExerciseSlide/>
              <SocialSlide/>
              <SelfCareSlide/>
          </main>
      </div>
  );
}

export default App;
