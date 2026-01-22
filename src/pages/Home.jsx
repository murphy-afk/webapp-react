import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="container py-5">
      <h1>Welcoem to MovieApp</h1>
      <Link to={'/movies'}>Visit our catalogue</Link>
      {/* <p>Add a movie:</p>
      <form>
        
      </form> */}
      </section>
    </>
  );
}