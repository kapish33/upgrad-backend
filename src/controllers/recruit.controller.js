const express = require("express");
const Recrute = require("../models/recruit.model");
const sendMail = require("../utils/sendmail");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const recrute = await Recrute.create(req.body);
    sendMail(
      "admin@upgrad.com",
      req.body.email,
      "Hii! Welcome to Upgrad Hiring!",
      `Hello ${req.body.company}  we will contact you soon.`,
      `<h1>Hi ${req.body.company}, we will contact you soon <h1>
      <p>Thank you for your interest in Upgrad Hiring</p>
      <p>Regards,</p>
      <p>Upgrad Hiring Team</p>
      <small>This is an auto generated mail. Please do not reply to this mail.</small>
      <small> for <bold> unsubscribe </bold> click <a href="http://localhost:3000/unsubscribe/${recrute._id}">here</a></small>`
    );
    return res.status(201).json({ recrute });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
