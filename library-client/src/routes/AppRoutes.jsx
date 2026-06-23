import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Books from "../pages/Books";
import Dashboard from "../pages/Dashboard";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import AddBook from "../pages/AddBook";
import IssuedBooks from "../pages/IssuedBooks";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
       
   <Route
  path="/books"
  element={
    <ProtectedRoute>
      <Books />
    </ProtectedRoute>
  }
/>

<Route
  path="/books/:id"
  element={
    <ProtectedRoute>
      <BookDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard"
  element={
    <AdminRoute>
      <Dashboard />
    </AdminRoute>
  }
/>

<Route
  path="/add-book"
  element={
    <AdminRoute>
      <AddBook />
    </AdminRoute>
  }
/>

<Route
  path="/issued-books"
  element={
    <AdminRoute>
      <IssuedBooks />
    </AdminRoute>
  }
/>

<Route
  path="/books/edit/:id"
  element={
    <AdminRoute>
      <EditBook />
    </AdminRoute>
  }
/>
</Routes>
  );
}

export default AppRoutes;