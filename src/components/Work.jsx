
export const WorkSlide = () => {
    return (
        <div className="container flex flex-col-reverse box-border bg-yellow-500
                      border-0 border-solid rounded-lg h-36">
            <div
                className="container items-center flex flex-row box-border bg-indigo-900 border-0 border-solid rounded-lg h-3/4">
                <div className="container flex flex-col">
                    <h3 className="text-sm pl-4 pt-4">Work</h3>
                    <p className="text-xl pl-4 py-2">32hrs</p>
                </div>
                <div className="flex flex-col w-60 pr-4 text-right">
                    <div>
                        <p>...</p>
                    </div>
                    <div>
                        <p className="text-xs pt-4">Last Week - 36hrs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}