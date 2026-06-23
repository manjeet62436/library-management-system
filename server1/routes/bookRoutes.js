const express = require("express");
const router = express.Router();

const {
  getBooks,
  addBook,
  getSingleBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

router.get("/", getBooks);
router.post("/add", addBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);
router.get("/:id", getSingleBook);

module.exports = router;