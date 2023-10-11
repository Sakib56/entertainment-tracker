import { useState } from "react";
import { Episode } from "../graphql/__generated__/graphql";
import { useAppDispatch } from "../redux/hooks";
import { addToBeWatchedList, addToWatchedList, addToWatchingList } from "../redux/slices/watchTrackerSlice";
import Swal from "sweetalert2";
type episodeType = {
    episode: Episode;
};

const EpisodeCard = ({ episode }: episodeType) => {
    const image = episode?.characters[5]?.image;
    const [show, setShow] = useState(false)

    const dispatch = useAppDispatch()

    const handleAddToWatchedList = (episode: Episode) => {
        console.log(episode);
        dispatch(addToWatchedList(episode))

        setShow(!show);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Add to Watched list successfully',
            showConfirmButton: false,
            timer: 1000
        })
      
    }
    const handleAddToWatchingList = (episode: Episode) => {
        console.log(episode);
        dispatch(addToWatchingList(episode))

        setShow(!show);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Add to Watched list successfully',
            showConfirmButton: false,
            timer: 1000
        })
    }
    const handleAddToBeWatchedList = (episode: Episode) => {
        console.log(episode);
        dispatch(addToBeWatchedList(episode))
        setShow(!show);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Add to Watched list successfully',
            showConfirmButton: false,
            timer: 1000
        })
    }

    return (
        <div className="bg-white rounded shadow-2xl p-3 font-mono overflow-hidden border border-yellow-600">
            <figure><img className="w-full h-52 transition duration-1000 ease-in-out hover:scale-125 transform" src={`${image}`} alt={`$25{episode?.name}}`} /></figure>
            <div className="p-2 relative">
                <div className="">
                    <h2 className="text-lg font-semibold">{episode?.name}</h2>
                    <div className="flex justify-between my-3">
                        <p>{episode?.episode}</p>
                        <p>{episode?.air_date}</p>
                    </div>
                    <div onClick={() => setShow(!show)} className="text-center">
                        <button className="w-full hover:bg-slate-200 border rounded text-blue-700 font-bold">Watch options</button>
                    </div>
                </div>
                <div className={`space-y-1 absolute top-0 bottom-0 left-0 right-0 w-full bg-black opacity-90 shadow-2xl bg-opacity-90 text-sm ${show ? 'block' : 'hidden'}`}>
                    <div onClick={() => setShow(!show)} className="text-right absolute right-0">
                        <button className="btn-xs bg-white text-red-600 w-fit rounded-full text-lg">X</button>
                    </div>
                    <div onClick={() => handleAddToWatchedList(episode)} className="text-center">
                        <button className="bg-yellow-700 border border-yellow-300 hover:bg-yellow-950 text-white px-5 py-1 w-1/2">Watched</button>
                    </div>
                    <div onClick={() => handleAddToWatchingList(episode)} className="text-center">
                        <button className="bg-yellow-700 border border-yellow-300 hover:bg-yellow-950 text-white px-5 py-1 w-1/2">Watching</button>
                    </div>
                    <div onClick={() => handleAddToBeWatchedList(episode)} className="text-center">
                        <button className="bg-yellow-700 border border-yellow-300 text-white px-5 py-1 hover:bg-yellow-950">To Be Watched</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;