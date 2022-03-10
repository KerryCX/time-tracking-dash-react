export const SelfCareSlide = () => {
    return(
        <div
            className="container box-border flex flex-col-reverse bg-yellow-300 border-0 border-solid 
            rounded-lg h-36 md:h-full">
            <div
                className="container items-center flex flex-row box-border bg-indigo-900 border-0 border-solid rounded-lg h-3/4">
                <div className="container flex flex-col">
                    <h3 className="text-sm pl-4 pt-4">Self Care</h3>
                    <p className="text-xl pl-4 py-2">2hrs</p>
                </div>
                <div className="flex flex-col w-60 pr-4 text-right">
                    <div>
                        <p>...</p>
                    </div>
                    <div>
                        <p className="text-xs pt-4">Last Week - 2hrs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}