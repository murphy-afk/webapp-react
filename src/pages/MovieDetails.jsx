import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReviewForm from "../components/ReviewForm";
import Review from "../components/Review";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/api/movies/${id}`)
      .then((resp) => {
        if (resp.data === "") {
          setMovie("error");
        } else {
          setMovie(resp.data);
        }
      });
  }, [id]);

  return (
    <>
      <section className="container py-5 mt-5">
        {movie !== null && movie !== "error" && (
          <div className="container">
          <section
        className="py-5 d-flex align-items-center justify-content-center movie-banner"
        style={{
          backgroundImage: `url(${backendBaseUrl}/movies_cover/${movie.image})`,
        }}
      >
        <div className="container d-flex align-items-center justify-content-center">
          <h1 className="text-white bg-dark w-50 text-center rounded py-2 fw-light">{movie.title}</h1>
        </div>
      </section>
            <div className="card shadow-sm mb-4">
              <div className="card-body">
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
            {movie.reviews && movie.reviews.length > 0 ? (
              <ul className="list-group">
                {movie.reviews.map((review) => (
                  <li key={review.id} className="list-group-item">
                    <Review review={review}/>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted fst-italic">No reviews available</p>
            )}
            <div className="mt-2">
              <ReviewForm movieId={movie.id} />
            </div>
          </div>
        )}
        {movie === "error" && (
          <div className="alert alert-danger mt-4">
            Movie not found or an error occurred.
          </div>
        )}
      </section>
    </>
  );
}
