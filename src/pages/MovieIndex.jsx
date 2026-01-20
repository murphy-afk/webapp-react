import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

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
        <div className="row row-cols-3 gap-2">
          {movies.map((movie) => (
            <div className="card col" key={movie.id}>
              <img src={movie.image} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.abstract}</p>
                <Link className="nav-link"
                  aria-current="page"
                  to={`/movies/${movie.id}`}>See details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
