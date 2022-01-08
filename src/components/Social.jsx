export const SocialSlide = () => {
    return(
        <div
            className="container box-border flex flex-col-reverse bg-purple-600 border-0 border-solid
            rounded-lg h-36 mt-2">
            <div
                className="container items-center flex flex-row box-border bg-indigo-900 border-0 border-solid
                rounded-lg h-3/4">
                <div className="container flex flex-col">
                    <h3 className="text-sm pl-4 pt-4">Social</h3>
                    <p className="text-xl pl-4 py-2">5hrs</p>
                </div>
                <div className="flex flex-col w-60 pr-4 text-right">
                    <div>
                        <p>...</p>
                    </div>
                    <div>
                        <p className="text-xs pt-4">Last Week - 10hrs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}