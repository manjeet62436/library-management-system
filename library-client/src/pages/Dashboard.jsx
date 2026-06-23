import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalUsers: 0,
    issuedBooks: 0,
    overdueBooks: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/dashboard/stats"
        );

        setStats(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-blue-900 text-white p-6 rounded-xl">
            <h2 className="text-3xl font-bold">
              {stats.totalBooks}
            </h2>
            <p>Total Books</p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-xl">
            <h2 className="text-3xl font-bold">
              {stats.totalUsers}
            </h2>
            <p>Total Users</p>
          </div>

          <div className="bg-yellow-500 text-white p-6 rounded-xl">
            <h2 className="text-3xl font-bold">
              {stats.issuedBooks}
            </h2>
            <p>Issued Books</p>
          </div>

          <div className="bg-red-500 text-white p-6 rounded-xl">
            <h2 className="text-3xl font-bold">
              {stats.overdueBooks}
            </h2>
            <p>Overdue Books</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;