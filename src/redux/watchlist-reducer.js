import AT from "./action-types";

const initialState = {
  isLoading: true,
  error: null,
  watchlist: [],
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.LIST_LOADING:
      return { ...state, isLoading: true };
    case AT.LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case AT.LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        watchlist: action.payload,
      };

    case AT.ADD_TO_LIST:
      return { ...state, watchlist: [...state.watchlist, action.payload] };

    case AT.REMOVE_FROM_LIST:
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default watchlistReducer;
