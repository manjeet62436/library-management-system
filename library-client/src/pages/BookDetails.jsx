import { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "../components/Navbar";

import { useParams, useNavigate } from "react-router-dom";
function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);


  const handleDelete = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this book?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/books/${id}`
    );

    alert("Book Deleted Successfully");
    navigate("/books");
  } catch (error) {
    console.log(error);
    alert("Failed to Delete Book");
  }
};

const handleIssueBook = async () => {
  try {
    const usersRes = await axios.get(
      "http://localhost:5000/api/users/all"
    );

    const userId = usersRes.data.users[0]._id;

    const res = await axios.post(
      "http://localhost:5000/api/issues",
      {
        userId,
        bookId: id,
      }
    );

    alert(res.data.message);

    window.location.reload();
  } catch (error) {
    console.log(error);
    alert(
      error.response?.data?.message ||
      "Failed to Issue Book"
    );
  }
};

  useEffect(() => {
    
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/books/${id}`
        );

        setBook(res.data.book);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return (
      <>
        <Navbar />
        <h2 className="text-center text-2xl mt-10">
          Loading...
        </h2>
      </>
    );
  }

  return (
    
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
      
         <button
  onClick={() => navigate("/books")}
  className="mb-4 bg-gray-700 text-white px-4 py-2 rounded"
>
  Back to Books
</button>||

<button
  onClick={handleDelete}
  className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
>
  Delete Book
</button>||

<button
  onClick={() => navigate(`/books/edit/${id}`)}
  className="mt-4 mr-3 bg-yellow-500 text-white px-4 py-2 rounded"
>
  Edit Book
</button>||
<button
  onClick={handleIssueBook}
  className="mt-4 mr-3 bg-green-600 text-white px-4 py-2 rounded"
>
  Issue Book
</button>

      
        <h1 className="text-3xl font-bold mb-6">
          Book Details
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            {book.title}
          </h2>

          <p className="mb-2">
            <strong>Author:</strong> {book.author}
          </p>

          <p className="mb-2">
            <strong>Category:</strong> {book.category}
          </p>

          <p className="mb-2">
            <strong>Quantity:</strong> {book.quantity}
          </p>

          <p className="mb-2">
            <strong>Available:</strong> {book.available}
          </p>
        </div>
      </div>
    </>
  );
}

export default BookDetails;