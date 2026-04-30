import { Minus, Plus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWatchlist } from "../../redux/actions";

const WatchListButton = ({ movie }) => {
  const dispatch = useDispatch();

  const { watchlist } = useSelector((store) => store);

  const isAdded = watchlist.some((item) => item.id === movie.id);

  const handleToggle = () => {
    dispatch(toggleWatchlist(movie, !isAdded));
  };

  return (
    <button
      onClick={handleToggle}
      className="hero-btn bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 px-4 py-2"
    >
      {isAdded ? (
        <>
          <Minus className="size-5" />
          Listeden Kaldır
        </>
      ) : (
        <>
          <Plus className="size-5" />
          Listeye Ekle
        </>
      )}
    </button>
  );
};

export default WatchListButton;
