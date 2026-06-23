const express = require("express");
const router = express.Router();
const { 
    registerUser,
    loginUser, 
    getUsers,
       
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", (req, res) => {
  res.json({ message: "User Route Working" });
});
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

router.get("/all", getUsers);












module.exports = router;