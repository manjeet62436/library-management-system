import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
         const navigate = useNavigate();
   const user = JSON.parse(
  localStorage.getItem("user")
);

const isAdmin = user?.role === "admin";
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  alert("Logout Successful");

  navigate("/login");
};
  return (
    <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between">
      <h1 className="text-2xl font-bold">📚 LibraryHub</h1>

      
      <Link to="/">Home</Link>
<Link to="/books">Books</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
{isAdmin && (
  <Link to="/dashboard">Dashboard</Link>
)}
{isAdmin && (
  <Link to="/add-book">Add Book</Link>
)}
{isAdmin && (
  <Link to="/issued-books">Issued Books</Link>
)}
      <div className="flex gap-3">
        <button className="bg-white text-blue-900 px-4 py-2 rounded">
          Login
        </button>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded">
          Register
        </button>

        <button
  onClick={handleLogout}
  className="bg-red-600 text-white px-4 py-2 rounded"
>
  Logout
</button>
      </div>
    </nav>
  );
}

export default Navbar;