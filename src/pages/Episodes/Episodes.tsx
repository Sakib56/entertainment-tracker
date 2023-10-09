import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../graphql/queries/queries";
import EpisodeCard from "../../components/EpisodeCard";
import { Episode } from "../../graphql/__generated__/graphql";
const Episodes = () => {
    const { data, loading, error } = useQuery(GET_EPISODES);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error : {error.message}</p>;

    const episodes = data?.episodes?.results
    console.log(episodes);
    return (
        <div className="p-7 md:py-10 bg-slate-800 bg-opacity-80">
            <h1 className="text-center text-lg md:text-3xl font-bold text-white mb-5">All Episodes</h1>
            {
                episodes && (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {
                            episodes?.map((episode) => (
                                <EpisodeCard key={episode?.id} episode={episode as Episode} />
                            ))
                        }
                    </div>
                )
            }

        </div>
    );
};

export default Episodes;