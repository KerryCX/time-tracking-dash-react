import logo from "../images/image-jeremy.png";


export const NavBar = () => {
    return(
        <nav className="container box-border bg-indigo-900 box-border border-0 border-solid rounded-lg h-36 md:h-full">
            <div className="container bg-indigo-500 border-0 border-solid rounded-lg grid grid-cols-2 grid-rows-1 flex-row py-4 h-2/3
                  items-center justify-center md:grid-cols-1 md:grid-rows-2">
                <img src={logo} alt="JR" className="rounded-full h-14 w-14 border-solid
                      border-2 border-white mx-4"/>
                <div className="flex flex-col text-left pl-4">
                    <p className="text-sm text-gray-300">Report for</p>
                    <div className="flex flex-row gap-x-1 items-left text-xl md:flex-col">
                        <p>Jeremy</p>
                        <p>Robson</p>
                    </div>
                </div>
            </div>
            <div className="container grid grid-rows-1 grid-cols-3 justify-between items-center md:grid-cols-1 md:grid-rows-3">
                <h3 className="py-1 pl-5 text-indigo-400 hover:bg-indigo-500">Daily</h3>
                <h3 className="py-1 pl-5 hover:bg-indigo-500">Weekly</h3>
                <h3 className="py-1 pl-5 pr-5 text-indigo-400 hover:bg-indigo-500">Monthly</h3>
            </div>
        </nav>
    );
}