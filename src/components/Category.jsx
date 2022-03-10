const DefaultClassName = "container flex flex-col-reverse border-0 border-solid rounded-lg h-36 md:h-full";

export const Category = ({type, currentWeek, lastWeek, color}) => {
    const mergeClassList = color + " " + DefaultClassName
    return(
        <div className={mergeClassList}>
            <div className="container items-center flex flex-row box-border border-0 border-solid rounded-lg h-3/4 bg-indigo-900">
                <div className="container grid grid-cols-2 grid-rows-2 md:grid-rows-3">
                    <h3 className="text-xs pl-4 pt-4">{type}</h3>
                    <div className="py-2 pr-4 text-right">...</div>
                    <div className="pl-4 py-2 text-xl md:text-3xl md:py-0 md:col-span-2">{currentWeek}</div>
                    <div className="w-60 pr-4 text-right text-xs pt-4 md:pt-0 md:text-left md:pl-4">{lastWeek}</div>
                </div>
            </div>
        </div>
    );
}