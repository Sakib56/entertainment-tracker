import { useState } from "react";
import { Episode } from "../graphql/__generated__/graphql";

type episodeType = {
    episode: Episode;
};

const EpisodeCard = ({ episode }: episodeType) => {
    const image = episode?.characters[5]?.image;
    const [show, setShow] = useState(false)
    return (
        <div className="bg-white rounded shadow-2xl p-3 font-mono overflow-hidden border border-yellow-600">
            <figure><img className="w-full h-52 transition duration-1000 ease-in-out hover:scale-125 transform" src={`${image}`} alt={`$25{episode?.name}}`} /></figure>
            <div className="p-2 relative">
                <h2 className="text-lg font-semibold">{episode?.name}</h2>
                <div className="flex justify-between my-3">
                    <p>{episode?.episode}</p>
                    <p>{episode?.air_date}</p>
                </div>
                <div onClick={() => setShow(!show)} className="text-center">
                    <button className="w-full hover:bg-slate-200 border rounded text-blue-700 font-bold">Watch options</button>
                </div>
                <div className={`space-y-1 absolute top-0 bottom-0 left-0 right-0 w-full bg-black shadow-2xl bg-opacity-90 text-sm ${show ? 'block' : 'hidden'}`}>
                    <div onClick={() => setShow(!show)} className="text-right absolute right-0">
                        <button className="btn-xs bg-white w-fit rounded-full text-lg">X</button>
                    </div>
                    <div className="text-center">
                        <button className="bg-white bg-opacity-50 text-white px-5 py-1 w-1/2">Watched</button>
                    </div>
                    <div className="text-center">
                        <button className="bg-white bg-opacity-50 text-white px-5 py-1 w-1/2">Watching</button>
                    </div>
                    <div className="text-center">
                        <button className="bg-white bg-opacity-50 text-white px-5 py-1">To Be Watched</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;