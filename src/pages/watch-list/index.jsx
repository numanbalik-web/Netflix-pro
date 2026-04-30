import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../../utils/constants";
import { BookmarkMinus } from "lucide-react";
import { toggleWatchlist } from "../../redux/actions";

const WatchList = () => {
  const { isLoading, error, watchlist } = useSelector((store) => store);

  const handleRemove = (movie) => {
    dispatch(toggleWatchlist(movie, false));
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-red-500">
        İzleme Listesi
      </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-5 my-10">
          {watchlist.map((movie) => (
            <div className="group relative">
              <button
                onClick={() => handleRemove(movie)}
                className="absolute top-3 inset-e-3 bg-red-500 p-2 rounded-lg z-10 hover:scale-110 shadow-lg shadow-red-500/50 items-center justify-center hidden group-hover:flex"
              >
                <BookmarkMinus />
              </button>

              <Link to={`/movie/${movie.id}`}>
                <img
                  src={BASE_IMG_URL + movie.poster_path}
                  alt={movie.title}
                  className="rounded-xl shadow-lg group-hover:scale-105 object-cover group-hover:shadow-2xl group-hover:shadow-white/20 transition duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
