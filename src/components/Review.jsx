export default function Review({ review }) {
  return (
    <>
      <h5 className="mb-1">{review.name}</h5>
      <p className="mb-1">{review.text}</p>
      <span className="badge bg-primary">
        Vote: {review.vote}
      </span>
    </>
  )
}