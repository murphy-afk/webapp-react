import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../components/Card";

export default function MovieIndex() {
  const [movies, setMovies] = useState([]);

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/api/movies`)
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <section className="py-5 mt-5 container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold">Movie List</h1>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
