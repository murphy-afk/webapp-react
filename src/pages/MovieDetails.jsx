import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null)
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
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
      <section className="py-5 mt-5 container">
        {movie !== null &&
          <div>
            <h1>Details:</h1>
            <h2>Title: {movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Asbtract: {movie.abstract}</p>
            <p>Released: {movie.release_year}</p>
            <div>Reviews:
              <ul>
                {movie.reviews.map((review) => (
                  <li key={review.id}>
                    <p>{review.name}</p>
                    <p>{review.text}</p>
                    <p>vote:{review.vote}</p>
                  </li>))}
              </ul>
            </div>
          </div>

        }

      </section>
    </>
  )
}