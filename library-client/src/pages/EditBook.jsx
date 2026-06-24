import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `https://library-management-system-cgho.onrender.com/api/books/${id}`
        );

        setFormData({
          title: res.data.book.title,
          author: res.data.book.author,
          category: res.data.book.category,
          quantity: res.data.book.quantity,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://library-management-system-cgho.onrender.com/api/books/${id}`,
        formData
      );

      alert("Book Updated Successfully");
      navigate(`/books/${id}`);
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Edit Book
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded"
          >
            Update Book
          </button>
        </form>
      </div>
    </>
  );
}

export default EditBook;