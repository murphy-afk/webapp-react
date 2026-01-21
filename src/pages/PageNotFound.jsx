import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="container text-center bg-dark py-4 font-monospace text-light mt-3 rounded">
      <h1 className='text-light fw-bold'>ERROR 404 Page not found</h1>
      <p>sorry... you seem to be in the wrong place click the button to go back to the home page</p>
      <span><button className='btn btn-outline-light mt-0 font-monospace my-2' onClick={() => navigate('/')}>Go back</button></span>
      <p>or you can stay and look at the cat</p>
      <img className="cat-gif rounded" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWZmb2MwZGxiYzg0OWtuNDhhNzM4amJvenU0aWQzbzFzd3R0azh5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gXXFrjHFJIMoqKr8UT/giphy.gif" alt="catgif" />
    </div>
  )
}