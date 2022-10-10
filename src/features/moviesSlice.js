import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesData } from "../utils/server-requests";
const initialMovieHandler = {
  movies: [],
};
export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  try {
    const response = await getMoviesData();

    return response;
  } catch (e) {
    console.log(e);
  }
});
const movieSlice = createSlice({
  name: "movies",
  initialState: initialMovieHandler,
  reducers: {
    editMovie: (state, { payload }) => {
      state.movies = state.movies.map((movie) =>
        movie.imdbID === payload
          ? { ...movie, isEditable: true }
          : { ...movie, isEditable: false }
      );
    },
    updateMovie: (state, { payload: { id, editData: data } }) => {
      state.movies = state.movies.map((movie) =>
        movie.imdbID === id ? { ...data, isEditable: false } : movie
      );
    },
  },
  extraReducers: {
    [getMovies.pending]: (state) => {},
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload.map((item) => ({ ...item, isEditable: false }));
    },
  },
});
export const { editMovie, updateMovie } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;
