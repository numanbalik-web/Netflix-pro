import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Buttons from "./buttons";
import Banner from "./banner";
import Content from "./content";
import Actors from "./actors";

const Movie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const params = { append_to_response: "credits", language: "tr" };

    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <Buttons movie={movie} />
      <Banner movie={movie} />
      <Content movie={movie} />
      <Actors cast={movie.credits.cast} />
    </div>
  );
};

export default Movie;
