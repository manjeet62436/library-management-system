const express = require("express");
const router = express.Router();
const { 
    issueBook,
    returnBook,
    getIssuedBooks,
} = require("../controllers/issueController");

router.get("/", (req, res) => {
  res.json({ message: "Issue Route Working" });
});

router.post("/", issueBook);
router.put("/return/:id", returnBook);
router.get("/all", getIssuedBooks);
module.exports = router;