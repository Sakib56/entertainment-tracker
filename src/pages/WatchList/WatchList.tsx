import ToBeWatchedTable from "../../components/ToBeWatchedTable";
import WatchedTable from "../../components/WatchedTable";
import WatchingTable from "../../components/WatchingTable";
import { Episode } from "../../graphql/__generated__/graphql";
import { useAppSelector } from "../../redux/hooks";

const WatchList = () => {
    const { watchedLists, watchingLists, toBeWatchedLists } = useAppSelector(state => state.episodes)
    console.log(watchedLists, watchingLists, toBeWatchedLists);
    return (
        <div className="min-h-screen">
            <h1 className="text-center my-10 text-lg md:text-3xl font-bold text-white font-mono">Watch list</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <h1 className="border-b-2 text-lg md:text-xl text-white text-center">To be Watched</h1>
                    <div className="overflow-x-auto border">
                        <table className="table text-white text-opacity-70">

                            <thead>
                                <tr className="text-white">
                                    <th>Name & photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                watchedLists?.map((episode) => <WatchedTable key={episode.id} episode={episode as Episode} />)
                            }

                        </table>
                    </div>


                </div>
                <div>
                    <h1 className="border-b-2 text-lg md:text-xl text-white text-center">To be Watched</h1>
                    <div className="overflow-x-auto border">
                        <table className="table text-white text-opacity-70">

                            <thead>
                                <tr className="text-white">
                                    <th>Name & photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                watchingLists?.map((episode) => <WatchingTable key={episode.id} episode={episode as Episode} />)
                            }

                        </table>
                    </div>


                </div>
                <div>
                    <h1 className="border-b-2 text-lg md:text-xl text-white text-center">To be Watched</h1>
                    <div className="overflow-x-auto border">
                        <table className="table text-white text-opacity-70">

                            <thead>
                                <tr className="text-white">
                                    <th>Name & photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                toBeWatchedLists?.map((episode) => <ToBeWatchedTable key={episode.id} episode={episode as Episode} />)
                            }

                        </table>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default WatchList;