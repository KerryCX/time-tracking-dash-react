import './App.css';
import * as React from 'react-dom';
import logo from "./images/image-jeremy.png";

function App() {
  return (
          <body className="bg-black">
          <main className="container box-border w-10/12 h-full mx-auto flex flex-col gap-4 gap-y-4
              text-white font-mono font-normal pt-8 md:flex-row">
              <nav className="container box-border bg-indigo-900 box-border border-0 border-solid rounded-lg h-40">
                  <div className="container bg-indigo-500 h-4/6 border-0 border-solid rounded-lg flex flex-row py-4
                  items-center justify-center">
                      <img src={logo} alt="profilepic" className="rounded-full h-14 w-14 border-solid
                      border-2 border-white"/>
                      <div className="flex flex-col text-left pl-4">
                          <p className="text-sm text-gray-300">Report for</p>
                          <div className="flex flex-row gap-x-1 items-left text-xl md:flex-col">
                              <p>Jeremy</p>
                              <p>Robson</p>
                          </div>
                      </div>
                  </div>
                  <div className="container flex flex-row justify-between items-center">
                      <h3 className="text-indigo-400 pl-5 py-4 hover:bg-indigo-500">oops</h3>
                      <h3 className="py-4 hover:bg-indigo-500">oops</h3>
                      <h3 className="py-4 text-indigo-400 pr-5 hover:bg-indigo-500">oops</h3>
                  </div>
              </nav>
          </main>
          </body>
  );
}

export default App;
