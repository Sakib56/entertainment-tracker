import { Episode } from "../graphql/__generated__/graphql";

type episodeType = {
    episode: Episode;
};
const WatchedTable = ({ episode }: episodeType) => {
    console.log(episode);
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
                    remove
                </td>

            </tr>

        </tbody>
    );
};

export default WatchedTable;