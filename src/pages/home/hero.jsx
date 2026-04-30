import { useEffect, useState } from "react";
import api from "../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../../utils/constants";
import WatchListButton from "../../components/button/watch-list-button";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    api
      .get("/movie/popular?language=tr")
      .then((res) => {
        const index = Math.round(Math.random() * 19);

        setMovie(res.data.results[index]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="backdrop-blur-md bg-linear-to-r from-black/40 to-transparent p-8 rounded-3xl border border-white/10 shadow-2xl md:max-h-100 mb-10">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-4xl font-bold text-center">{movie.title}</h1>

            <p className="text-gray-300 line-clamp-5 leading-relaxed">
              {movie.overview}
            </p>

            <div className="flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30">
              <span>IMDB</span>
              <span className="text-yellow-400 font-bold text-lg">
                {movie.vote_average.toFixed(2)}
              </span>
            </div>

            <div className="flex gap-5">
              <Link
                to={`/movie/${movie.id}`}
                className="hero-btn bg-red-600 hover:bg-red-700 rounded-lg flex items-center gap-2 px-4 py-2"
              >
                <Play className="size-5" />
                Filmi İzle
              </Link>

              <WatchListButton movie={movie} />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={BASE_IMG_URL + movie.backdrop_path}
              className="drop-shadow-[0_0_80px_rgba(255,255,255,0.2)] rounded-2xl object-contain max-h-75 transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
