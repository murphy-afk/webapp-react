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

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <>
      <section className="py-5 mt-5 container">
        <h1>Movie list</h1>
        <div className="row row-cols-3 gap-2">
          {movies.map((movie) => (
            <div className="col mb-4" key={movie.id}>
              <div className="card h-100 shadow-sm"  >
                <img src={movie.image !== null ? `${backendBaseUrl}/movies_cover/${movie.image}` : "no_image_placeholder.jpg"} className="card-img-top" alt={movie.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text text-muted">{movie.abstract}</p>
                  <div className="mt-auto">
                    <Link className="btn btn-primary w-100" aria-current="page" to={`/movies/${movie.id}`} > See details </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
