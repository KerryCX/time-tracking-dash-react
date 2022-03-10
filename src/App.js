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
      <div className="bg-black h-screen">
          <main className="container box-border w-10/12 h-3/4 mx-auto grid grid-cols-1 
          gap-4 md:gap-y-0 text-white font-mono font-normal pt-8 md:grid-cols-4">
              <div className="md:row-span-2"><NavBar/></div>
              <WorkSlide/>
              <PlaySlide/>
              <StudySlide/>
              <ExerciseSlide/>
              <SocialSlide/>
              <SelfCareSlide/>
          </main>
      </div>
  );
}

export default App;
