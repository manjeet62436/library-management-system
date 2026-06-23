const Book = require("../models/Book");
const User = require("../models/User");
const IssueBook = require("../models/IssueBook");

const getDashboardStats = async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();
    const totalUsers = await User.countDocuments();
    const issuedBooks = await IssueBook.countDocuments({
      status: "Issued",
    });
    const overdueBooks = await IssueBook.countDocuments({
  status: "Issued",
  dueDate: { $lt: new Date() },
});

    res.json({
      success: true,
      totalBooks,
      totalUsers,
      issuedBooks,
      overdueBooks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};