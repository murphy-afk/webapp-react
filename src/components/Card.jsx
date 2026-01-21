import { Link } from "react-router";

export default function Card({ movie }) {
  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="col h-100" key={movie.id}>
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
            {movie.avg_vote} &#9733;
          </span>
          <h5 className="card-title fw-semibold">{movie.title}</h5>
          <p className="card-text text-muted">{movie.abstract}</p>
          <div className="mt-auto">
            <Link className="btn btn-outline-primary w-100" to={`/movies/${movie.id}`}> See details</Link>
          </div>
        </div>
      </div>
    </div>

  )
}