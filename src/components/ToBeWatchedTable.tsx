import { Episode } from "../graphql/__generated__/graphql";
import { useAppDispatch } from "../redux/hooks";
import { addToWatchedList, addToWatchingList, removeFromToBeWatchedList } from "../redux/slices/watchTrackerSlice";

type episodeType = {
    episode: Episode;
};
const ToBeWatchedTable = ({ episode }: episodeType) => {
    console.log(episode);
    const dispatch = useAppDispatch()

    const handleAddToWatchedList = (episode: Episode) => {
        console.log(episode);
        dispatch(addToWatchedList(episode))
        dispatch(removeFromToBeWatchedList(episode?.id as string))
    }
    const handleAddToWatchingList = (episode: Episode) => {
        console.log(episode);
        dispatch(addToWatchingList(episode))
        dispatch(removeFromToBeWatchedList(episode?.id as string))
    }

    return (
        <tbody>
            {/* row 1 */}
            <tr className="border-0">
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={`${episode?.characters[5]?.image}`} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{episode?.name}</div>
                            <div className="text-sm opacity-50">{episode?.episode}</div>
                        </div>
                    </div>
                </td>
                <td className="flex flex-col justify-center align-middle space-y-1">
                    <button onClick={() => handleAddToWatchingList(episode)} className="border px-4 py-1">Watching</button>
                    <button onClick={() => handleAddToWatchedList(episode)} className="border px-4 py-1"> Watched </button>
                    <button onClick={() => dispatch(removeFromToBeWatchedList(episode?.id as string))} className="border px-4 py-1 text-red-500">Delete</button>

                </td>

            </tr>

        </tbody>
    );
};

export default ToBeWatchedTable;