import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function IssuedBooks() {
  const [issuedBooks, setIssuedBooks] = useState([]);

  const fetchIssuedBooks = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/issues/all"
      );

      setIssuedBooks(res.data.issuedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReturnBook = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/issues/return/${id}`
      );

      alert(res.data.message);

      fetchIssuedBooks();
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
        "Failed to Return Book"
      );
    }
  };

  useEffect(() => {
    fetchIssuedBooks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Issued Books
        </h1>

        <div className="space-y-4">
          {issuedBooks.map((issue) => (
            <div
              key={issue._id}
              className="bg-white shadow-lg rounded-xl p-5"
            >
              <h2 className="font-bold text-xl">
                {issue.bookId?.title || "Deleted Book"}
              </h2>

              <p>
                User: {issue.userId?.name}
              </p>

              <p>
                Status: {issue.status}
              </p>
              <p>
  Due Date:{" "}
  {issue.dueDate
    ? new Date(issue.dueDate).toLocaleDateString()
    : "N/A"}
</p>

{issue.status === "Issued" &&
 issue.dueDate &&
 new Date(issue.dueDate) < new Date() && (
  <p className="text-red-600 font-bold">
    Overdue
  </p>
)}

              {issue.status === "Issued" && (
                <button
                  onClick={() =>
                    handleReturnBook(issue._id)
                  }
                  className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
                >
                  Return Book
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IssuedBooks;