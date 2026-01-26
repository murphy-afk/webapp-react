import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="container py-5">
      <h1>Welcome to MovieApp</h1>
      <Link to={'/movies'}>Visit our catalogue</Link>
      {/* add a movie button  */}
      </section>
    </>
  );
}