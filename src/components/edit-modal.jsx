import React, { useRef, useState } from "react";
import { updateMovie } from "../features/moviesSlice";
import { useClickout } from "../hooks/use-clickoutside";
import { useMovies } from "../hooks/use-movie";
import "./components.css";
const EditModal = ({ selectEdit }) => {
  const modalRef = useRef();
  useClickout(modalRef, selectEdit);
  const {
    state: { movies },
    dispatchMovies,
  } = useMovies();
  const [editData, setEditData] = useState(
    movies?.find((movie) => movie.isEditable)
  );
  const { Poster: img, Title: name, Year: yr, imdbID: id } = editData;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatchMovies(updateMovie({ id, editData }));
    selectEdit();
  };
  const editFormCancelHandler = () => {
    dispatchMovies(updateMovie({ id, editData }));
    selectEdit();
  };
  const inputHandler = (e) => {
    setEditData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <article className="fixed edit-modal z-2 flex items-center justify-center">
      <form
        ref={modalRef}
        className=" flex flex-col items-center justify-center g-1"
        onSubmit={submitHandler}
      >
        <input
          onChange={inputHandler}
          name="Title"
          placeholder="movie_name..."
          value={name}
          type="text"
        />
        <input
          onChange={inputHandler}
          name="Poster"
          placeholder="movie_img..."
          value={img}
          type="text"
        />
        <input
          onChange={inputHandler}
          name="Year"
          placeholder="release_year..."
          value={yr}
          type="text"
        />
        <section className="flex g-1">
          <button
            className="form-btn pointer action-button toggler-button"
            type="submit"
          >
            Update
          </button>
          <button
            className=" form-btn pointer action-button cancel-button"
            onClick={editFormCancelHandler}
          >
            Cancel
          </button>
        </section>
      </form>
    </article>
  );
};

export { EditModal };
