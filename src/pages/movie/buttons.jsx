import { Undo2 } from "lucide-react";
import { Link } from "react-router-dom";
import WatchListButton from "../../components/button/watch-list-button";

const Buttons = ({ movie }) => {
  return (
    <div className="flex mb-5 justify-between">
      <Link
        to={-1}
        className="hero-btn bg-gray-600/50 hover:bg-gray-600 rounded-lg flex items-center gap-12 px-6 py-2"
      >
        <Undo2 className="size-5" />
        Geri
      </Link>

      <WatchListButton movie={movie} />
    </div>
  );
};

export default Buttons;
