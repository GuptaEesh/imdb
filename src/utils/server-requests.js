import axios from "axios";

export const getMoviesData = async () => {
  const res = await axios.get(
    "https://fake-movie-database-api.herokuapp.com/api?s=batman"
  );
  return res.data.Search;
};
