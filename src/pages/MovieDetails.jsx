import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null)
  const { id } = useParams();
  console.log(id);

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/api/movies/${id}`)
      .then((resp) => {
        if (resp.data === '') {
          setMovie('error')
        }
        else {
          setMovie(resp.data)
          console.log(resp.data);
        }
      })
  }, [id])
  return (
    <>
      <section className="container py-5 mt-5">
        {movie !== null && (
          <div className="container">
            <h1 className="mb-4"> Movie Details</h1>
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-text mb-1">
                  <strong>Director:</strong> {movie.director}
                </p>
                <p className="card-text mb-1">
                  <strong>Abstract:</strong> {movie.abstract}
                </p>
                <p className="card-text">
                  <strong>Released:</strong> {movie.release_year}
                </p>
              </div>
            </div>
            <h3 className="mb-3">Reviews</h3>
            <ul className="list-group">
              {movie.reviews.map((review) => (
                <li key={review.id} className="list-group-item">
                  <h5 className="mb-1">{review.name}</h5>
                  <p className="mb-1">{review.text}</p>
                  <span className="badge bg-primary">Vote: {review.vote}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>

  )
}