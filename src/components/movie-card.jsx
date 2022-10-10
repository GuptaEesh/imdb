import React from "react";
import { FiEdit } from "../utils/icons";
import "./components.css";
const MovieCard = ({ movie, selectEdit }) => {
  const { Poster: img, Title: name, Year: yr, imdbID: id } = movie;
  return (
    <article className=" movie-card flex flex-col g-1 space-bw m-1 pointer">
      <img src={img} alt={name} />
      <section className="flex items-center space-bw p-1">
        <div className="left">
          <h1>{name}</h1>
          <small>Year of Release : {yr}</small>
        </div>
        <FiEdit
          onClick={() => selectEdit(id)}
          className="pointer x-lg"
          color="var(--red)"
        />
      </section>
    </article>
  );
};

export { MovieCard };
