import './App.css';
import * as React from 'react-dom';
import {NavBar} from "./components/NavBar";
import {WorkSlide} from "./components/Work";
import {PlaySlide} from "./components/Play";
import {StudySlide} from "./components/Study";
import {ExerciseSlide} from "./components/Exercise";
import {SocialSlide} from "./components/Social";
import {SelfCareSlide} from "./components/SelfCare";

function App() {
  return (
      <div className="bg-black">
          <main className="container box-border w-10/12 h-full mx-auto grid grid-cols-1 
          gap-4 gap-y-4 text-white font-mono font-normal pt-8 md:grid-cols-4">
              <div className="md:row-span-2"><NavBar/></div>
              <WorkSlide/>
              <PlaySlide/>
              <StudySlide/>
              <ExerciseSlide/>
              <SocialSlide/>
              <SelfCareSlide/>
          </main>
          <div className="attribution">Coded by KerryCX
          </div>
      </div>
  );
}

export default App;
