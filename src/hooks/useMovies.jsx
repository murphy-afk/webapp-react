import { useState, useEffect } from "react";
import axios from "axios";

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function useMovies() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/api/movies?page=${page}`)
      .then((resp) => {
        setMovies(resp.data.results);
        setTotalPages(resp.data.info.pages);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page]);

  return {
    movies,
    page,
    totalPages,
    setPage
  }

}