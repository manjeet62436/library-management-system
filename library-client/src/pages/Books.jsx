import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:5000/api/books"
        );
         console.log(res.data);
        setBooks(res.data.books);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Library Books
        </h1>

        <div className="mb-6">
  <input
    type="text"
    placeholder="Search books..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border p-3 rounded-lg"
  />
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books
  .filter((book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-lg rounded-xl p-5"
            >
              <h2 className="text-xl font-bold">
                {book.title}
              </h2>

              <p className="text-gray-600 mt-2">
                Author: {book.author}
              </p>

              <p className="text-gray-600">
                Category: {book.category}
              </p>

              <p className="text-gray-600">
                Available: {book.available}
              </p>
              <button
                 onClick={() => navigate(`/books/${book._id}`)}
                  className="mt-4 bg-blue-900 text-white px-4 py-2 rounded"
                      >
                      View Details
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;