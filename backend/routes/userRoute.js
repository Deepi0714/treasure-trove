
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controller/userController");


router.post("/", userController.signup);
router.post("/login", userController.login);
router.get("/", userController.getUsers);



router.get("/profile", auth, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});
module.exports = router;
