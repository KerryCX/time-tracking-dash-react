import logo from "../images/image-jeremy.png";


export const NavBar = () => {
    return(
        <nav className="container box-border bg-indigo-900 box-border border-0 border-solid rounded-lg h-36 md:h-full">
            <div className="container bg-indigo-500 border-0 border-solid rounded-lg grid grid-cols-3 grid-rows-1 flex-row py-4 h-2/3
                  items-center justify-center md:grid-cols-1 md:grid-rows-2">
                <img src={logo} alt="JR" className="rounded-full h-14 w-14 border-solid
                      border-2 border-white ml-8 md:ml-4"/>
                <div className="flex flex-col text-left md:pl-4 col-span-2">
                    <p className="text-xs text-gray-300">Report for</p>
                    <div className="flex flex-row gap-x-1 items-left text-xl md:text-2xl md:flex-col">
                        <p>Jeremy</p>
                        <p>Robson</p>
                    </div>
                </div>
            </div>
            <div className="container text-xs grid grid-rows-1 grid-cols-3 md:grid-cols-1 md:grid-rows-3 pt-4">
                <h3 className="text-centre md:py-1 pl-5 mr-5 text-indigo-400 cursor-pointer hover:bg-indigo-500">Daily</h3>
                <h3 className="text-centre md:py-1 pl-5 pr-5 cursor-pointer hover:bg-indigo-500">Weekly</h3>
                <h3 className="text-centre md:py-1 pl-5 cursor-pointer pr-5 text-indigo-400 hover:bg-indigo-500">Monthly</h3>
            </div>
        </nav>
    );
}