import { Activity, TimeFrame } from "../types";
import { CATEGORY_COLORS, PREVIOUS_LABEL } from "../constants";

const defaultClassName =
  "container flex flex-col-reverse border-0 border-solid rounded-lg h-36 md:h-full";

interface CategoryProps {
  activity: Activity;
  timeframe: TimeFrame;
}

export const Category = ({ activity, timeframe }: CategoryProps) => {
  const { title, timeframes } = activity;
  const { current, previous } = timeframes[timeframe];
  const color = CATEGORY_COLORS[title];
  const previousLabel = PREVIOUS_LABEL[timeframe];

  return (
    <div className={`${color} ${defaultClassName}`}>
      <div className='container font-sans items-center flex flex-row box-border border-0 border-solid rounded-lg h-4/5 bg-indigo-900'>
        <div className='container grid grid-cols-2 grid-rows-2 md:grid-rows-3'>
          <h3 className='text-sm md:text-xs pl-4 pt-0 md:pt-6 md:col-span-2'>
            {title}
          </h3>
          <div className='md:pt-4 pt-0 pr-4 text-sm text-right cursor-pointer'>
            ...
          </div>
          <div className='pt-0 pl-4 text-3xl md:text-4xl md:pt-1 md:col-span-3'>
            {current}hrs
          </div>
          <div className='pt-2 pr-4 text-xs text-right md:w-60 md:pt-0 md:text-left md:pl-4'>
            {previousLabel} - {previous}hrs
          </div>
        </div>
      </div>
    </div>
  );
};
