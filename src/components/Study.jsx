export const StudySlide = () => {
    return(
        <div className="container  flex flex-col-reverse bg-pink-400 border-0 border-solid rounded-lg h-36">
            <div className="container items-center flex flex-row box-border bg-indigo-900 border-0 border-solid
                rounded-lg h-3/4">
                <div className="container grid grid-cols-2 grid-rows-2 md:grid-rows-3">
                    <h3 className="text-sm pl-4 pt-4">Study</h3>
                    <div className="py-2 pl-4 pr-4 text-right">...</div>
                    <div className="pl-4 py-2 text-xl md:text-2xl md:col-span-2">4hrs</div>
                    <div className="w-60 pr-4 text-right text-xs pt-4 md:pr-0 md:text-left">Last Week - 7hrs</div>
                </div>
            </div>
        </div>
    );
}