import logo from "../images/image-jeremy.png";
import { TimeFrame } from "../types";

interface NavBarProps {
  timeframe: TimeFrame;
  onTimeFrameChange: (timeframe: TimeFrame) => void;
}

const timeframes: TimeFrame[] = ["daily", "weekly", "monthly"];

export const NavBar = ({ timeframe, onTimeFrameChange }: NavBarProps) => {
  return (
    <nav className='container box-border bg-indigo-900 border-0 border-solid rounded-lg h-36 md:h-full'>
      <div
        className='container bg-indigo-500 border-0 border-solid rounded-lg grid grid-cols-3 grid-rows-1 py-4 h-2/3
            items-center justify-center md:grid-cols-1 md:grid-rows-2'
      >
        <img
          src={logo}
          alt='Jeremy Robson'
          className='rounded-full h-14 w-14 border-solid border-2 border-white ml-8 md:ml-4'
        />
        <div className='flex flex-col text-left md:pl-4 col-span-2'>
          <p className='text-xs text-gray-300'>Report for</p>
          <div className='flex flex-row gap-x-1 text-xl md:text-2xl md:flex-col'>
            <p>Jeremy</p>
            <p>Robson</p>
          </div>
        </div>
      </div>
      <div className='container text-xs grid grid-rows-1 grid-cols-3 md:grid-cols-1 md:grid-rows-3 pt-4'>
        {timeframes.map((tf) => (
          <button
            key={tf}
            onClick={() => onTimeFrameChange(tf)}
            className={`capitalize md:py-1 pl-5 pr-5 text-left cursor-pointer hover:text-white
              ${timeframe === tf ? "text-white" : "text-indigo-400"}`}
          >
            {tf}
          </button>
        ))}
      </div>
    </nav>
  );
};
