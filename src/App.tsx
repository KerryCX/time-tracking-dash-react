import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Category } from "./components/Category";
import data from "./data.json";
import { TimeFrame } from "./types";

function App() {
  const [timeframe, setTimeframe] = useState<TimeFrame>("weekly");

  return (
    <div className='bg-black md:h-screen'>
      <main
        className='container box-border w-10/12 h-3/4 mx-auto grid
        grid-cols-1 gap-4 text-white font-mono font-normal pt-8 md:pt-48 md:grid-cols-4'
      >
        <div className='md:row-span-2'>
          <NavBar timeframe={timeframe} onTimeFrameChange={setTimeframe} />
        </div>
        {data.map((activity) => (
          <Category
            key={activity.title}
            activity={activity}
            timeframe={timeframe}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
