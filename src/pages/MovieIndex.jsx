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
  }, []);

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      <section className="py-5 mt-5 container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold">Movie List</h1>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <div className="card h-100 shadow-sm border-0 movie-card">
                <img src={movie.image !== null
                      ? `${backendBaseUrl}/movies_cover/${movie.image}`
                      : "no_image_placeholder.jpg"
                  }
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body d-flex flex-column">
                     <span className="badge text-bg-warning w-25 my-1">
                      Vote: {movie.avg_vote}
                    </span>
                  <h5 className="card-title fw-semibold">{movie.title}</h5>
                  <p className="card-text text-muted">{movie.abstract}</p>
                  <div className="mt-auto">
                    <Link className="btn btn-outline-primary w-100" to={`/movies/${movie.id}`}> See details</Link>
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
