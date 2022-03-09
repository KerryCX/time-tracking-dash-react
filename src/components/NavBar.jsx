import logo from "../images/image-jeremy.png";


export const NavBar = () => {
    return(
        <nav className="container box-border bg-indigo-900 box-border border-0 border-solid rounded-lg">
            <div className="container bg-indigo-500 border-0 border-solid rounded-lg flex flex-row py-4
                  items-center justify-center">
                <img src={logo} alt="JR" className="rounded-full h-14 w-14 border-solid
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
                <h3 className="text-indigo-400 pl-5 py-4 hover:bg-indigo-500">Daily</h3>
                <h3 className="py-4 hover:bg-indigo-500">Weekly</h3>
                <h3 className="py-4 text-indigo-400 pr-5 hover:bg-indigo-500">Monthly</h3>
            </div>
        </nav>
    );
}