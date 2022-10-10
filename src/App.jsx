import { useEffect, useState } from "react";
import "./App.css";
import { MovieCard, EditModal } from "./components";
import { editMovie, getMovies } from "./features/moviesSlice";
import { useScrollControl } from "./hooks/scroll-control";
import { useMovies } from "./hooks/use-movie";

function App() {
  const [isEditSelected, setIsEditSelected] = useState(false);
  const {
    state: { movies },
    dispatchMovies,
  } = useMovies();
  useEffect(() => {
    dispatchMovies(getMovies());
  }, []);
  const selectEdit = (id) => {
    setIsEditSelected((prev) => !prev);
    dispatchMovies(editMovie(id));
  };
  useScrollControl(isEditSelected);
  return (
    <div className="App">
      {isEditSelected && <EditModal selectEdit={selectEdit} />}
      <section className="grid grid-3 h-full">
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} selectEdit={selectEdit} movie={movie} />
        ))}
      </section>
    </div>
  );
}

export default App;
