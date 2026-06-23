const IssueBook = require("../models/IssueBook");
const Book = require("../models/Book");

const issueBook = async (req, res) => {
  try {
          const dueDate = new Date();
dueDate.setDate(dueDate.getDate() + 15);

    const { userId, bookId } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }

    if (book.available <= 0) {
      return res.status(400).json({
        success: false,
        message: "Book Not Available",
      });
    }

    const issuedBook = await IssueBook.create({
      userId,
      bookId,
      dueDate,
    });

    book.available -= 1;
    await book.save();

    res.status(201).json({
      success: true,
      message: "Book Issued Successfully",
      issuedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getIssuedBooks = async (req, res) => {
  try {
    const issuedBooks = await IssueBook.find()
      .populate("userId", "name email")
      .populate("bookId", "title author");

    res.status(200).json({
      success: true,
      issuedBooks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const returnBook = async (req, res) => {
  try {
    const { id } = req.params;

    const issuedBook = await IssueBook.findById(id);

    if (!issuedBook) {
      return res.status(404).json({
        success: false,
        message: "Issue Record Not Found",
      });
    }

    if (issuedBook.status === "Returned") {
      return res.status(400).json({
        success: false,
        message: "Book Already Returned",
      });
    }

    const book = await Book.findById(issuedBook.bookId);

    book.available += 1;
    await book.save();

    issuedBook.status = "Returned";
    issuedBook.returnDate = new Date();

    await issuedBook.save();

    res.status(200).json({
      success: true,
      message: "Book Returned Successfully",
      issuedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  issueBook,
  returnBook,
  getIssuedBooks,
};