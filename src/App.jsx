import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Movie from "./pages/movie";
import WatchList from "./pages/watch-list";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWatchlist } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchlist());
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen padding">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/watch-list" element={<WatchList />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
