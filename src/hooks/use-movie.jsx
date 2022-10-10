import { useDispatch, useSelector } from "react-redux";

export const useMovies = () => {
  const { movies } = useSelector((state) => state.movie);
  const dispatchMovies = useDispatch();
  return { state: { movies }, dispatchMovies };
};
