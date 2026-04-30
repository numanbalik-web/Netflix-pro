import api from "../utils/api";
import AT from "./action-types";

export const getWatchlist = () => (dispatch) => {
  dispatch({ type: AT.LIST_LOADING });

  api
    .get("/account/22981026/watchlist/movies")
    .then((res) =>
      dispatch({ type: AT.LIST_SUCCESS, payload: res.data.results }),
    )
    .catch((err) => dispatch({ type: AT.LIST_ERROR, payload: err.message }));
};

export const toggleWatchlist = (movie, isAdd) => (dispatch) => {
  const body = { media_type: "movie", media_id: movie.id, watchlist: isAdd };

  api.post("/account/22981026/watchlist/movies", body).then(() => {
    isAdd
      ? dispatch({ type: AT.ADD_TO_LIST, payload: movie })
      : dispatch({ type: AT.REMOVE_FROM_LIST, payload: movie.id });
  });
};
