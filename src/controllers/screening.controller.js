const express = require("express");
const Screening = require("../models/screening.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const screening = await Screening.create(req.body);
    return res.status(201).json({ screening });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
