import { Episode } from "../graphql/__generated__/graphql";
import { useAppDispatch } from "../redux/hooks";
import { removeFromWatchedList } from "../redux/slices/watchTrackerSlice";

type episodeType = {
    episode: Episode;
};
const WatchedTable = ({ episode }: episodeType) => {
    console.log(episode);
    const dispatch = useAppDispatch()
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
                <td>
                <button onClick={() => dispatch(removeFromWatchedList(episode?.id as string))} className="border px-4 py-1 text-red-500">Delete</button>
                </td>

            </tr>

        </tbody>
    );
};

export default WatchedTable;