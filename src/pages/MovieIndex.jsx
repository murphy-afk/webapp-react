import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieIndex() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  },
    []);

  return (
    <>
      <section className="py-5 mt-5 container">
        <h1>Movie list</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
