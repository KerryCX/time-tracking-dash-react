import './App.css';
import * as React from 'react-dom';
import {NavBar} from "./components/NavBar";

function App() {
  return (
          <body className="bg-black">
          <main className="container box-border w-10/12 h-full mx-auto flex flex-col gap-4 gap-y-4
              text-white font-mono font-normal pt-8 md:flex-row">
              <NavBar/>
          </main>
          </body>
  );
}

export default App;
