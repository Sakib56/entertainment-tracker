import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Navbar = () => {
    const { watchedLists, watchingLists, toBeWatchedLists } = useAppSelector(state => state.episodes)
    const watchDataLength = watchedLists.length + watchingLists.length + toBeWatchedLists.length;
    console.log(watchDataLength)
    return (
        <nav className="flex justify-between py-5 px-10 bg-gray-800 text-white">
            <div>
                <Link to='/'>
                    <h1 className="text-xl md:text-2xl font-bold font-mono">Entertainment Tracker</h1>
                </Link>
            </div>
            <div>
                <Link to='/watch-list'>
                    <p className="flex">
                        <span className="text-base">WatchList</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item bg-pink-500 text-white">{watchDataLength}</span>                </p>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;