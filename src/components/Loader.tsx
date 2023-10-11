import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
    return (
        <div className="sweet-loading min-h-[500px] flex justify-center items-center">
            <ClipLoader
                color="#ffff"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loader;