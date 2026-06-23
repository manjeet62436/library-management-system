const Book = require("../models/Book");


const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      count: books.length,
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
  

const addBook = async (req, res) => {
  try {
    const { title, author, category, quantity } = req.body;

    const book = await Book.create({
      title,
      author,
      category,
      quantity,
      available: quantity,
    });

    res.json({
      success: true,
      message: "Book Added Successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }

    res.json({
      success: true,
      message: "Book Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }

    res.json({
      success: true,
      message: "Book Updated Successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }

    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getBooks,
  getSingleBook,
  addBook,
  deleteBook,
  updateBook,
};