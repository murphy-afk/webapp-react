import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const initialData = {
  title: "",
  director: "",
  genre: "",
  abstract: "",
  image: null,
};

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function AddMovie() {
  const [formData, setFormData] = useState(initialData);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const navigate = useNavigate();

  function updateFormData(event) {
    const { value, name, type } = event.target;
    if (type === "file") {
      const image = event.target.files[0];
      const imagePreview = URL.createObjectURL(image);
      setImagePreviewUrl(imagePreview);
      setFormData({
        ...formData,
        [name]: image,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }
    axios
      .post(`${backendBaseUrl}/api/movies`, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        const id = resp.data.id;
        navigate(`/movies`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <section className="container py-3 mt-5">
      <h1 className="text-center">Add new movie</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                value={formData.title}
                onChange={updateFormData}
                className="form-control"
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="director">
                Director
              </label>
              <input
                type="text"
                id="director"
                className="form-control"
                name="director"
                value={formData.director}
                onChange={updateFormData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="abstract" className="form-label">
                Abstract
              </label>
              <textarea
                className="form-control"
                name="abstract"
                id="abstract"
                value={formData.abstract}
                onChange={updateFormData}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image">Image</label>
              <input
                className="form-control"
                type="file"
                name="image"
                id="image"
                onChange={updateFormData}
              />
              <div className="mt-3">
                {imagePreviewUrl && (
                  <img className="w-25" src={imagePreviewUrl} alt="" />
                )}
              </div>
            </div>
            <button className="mt-3 btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}