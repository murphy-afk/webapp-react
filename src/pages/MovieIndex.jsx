import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import useMovies from "../hooks/useMovies";

export default function MovieIndex() {
  const {movies, page, totalPages, setPage} = useMovies();

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
        <div className="mt-3">
          <span className="me-3">
            Page: {page} / {totalPages}
          </span>

          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
            className="btn btn-success me-1"
          >
            Prev
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => {
              setPage(page + 1);
            }}
            className="btn btn-success me-1">
            Next
          </button>
        </div>
      </section>
    </>
  );
}
