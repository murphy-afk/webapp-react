import axios from "axios";
import { useState } from "react";

const initialFormData = {
  name: "",
  vote: 0,
  text: "",
};

export default function ReviewForm({ movieId }) {
  const [formData, setFormData] = useState(initialFormData);
  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  function updateFormData(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${backendBaseUrl}/api/movies/${movieId}/reviews`, formData)
      .then(() => setFormData(initialFormData))
      .catch(console.error);
  }
  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h5 className="mb-3 border-bottom pb-2">Add a Review</h5>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={updateFormData}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="vote" className="form-label fw-semibold">
          Vote (0 - 5)
        </label>
        <input
          type="number"
          id="vote"
          name="vote"
          className="form-control"
          value={formData.vote}
          onChange={updateFormData}
          min="0"
          max="5"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fw-semibold">
          Review
        </label>
        <textarea
          id="text"
          name="text"
          className="form-control"
          rows="4"
          value={formData.text}
          onChange={updateFormData}
        />
      </div>
      <button className="btn btn-primary w-100">Submit</button>
    </form>
  )
}
