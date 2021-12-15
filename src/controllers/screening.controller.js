const express = require("express");
const Screening = require("../models/screening.model");
const User = require("../models/user.model");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const screening = await Screening.create(req.body);
    return res.status(201).json({ screening });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
// router to get user details by populate
router.get("/:id", authenticate, async (req, res) => {
  try {
    const screening = await User.findById(req.params.id).exec();
    return res.status(200).json({ screening });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
module.exports = router;
