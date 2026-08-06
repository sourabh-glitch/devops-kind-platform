const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* ===========================
   Health Check
=========================== */

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* ===========================
   Email Schema
=========================== */

const emailSchema = new mongoose.Schema({
  to: {
    type: String,
    default: "",
    trim: true,
  },
  bcc: {
    type: String,
    default: "",
    trim: true,
  },
  subject: {
    type: String,
    default: "",
  },
  body: {
    type: String,
    default: "",
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
});

const Email = mongoose.model("Email", emailSchema);

/* ===========================
   Send Email
=========================== */

app.post("/send-email", async (req, res) => {
  try {
    const { to, bcc, subject, body } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to || process.env.EMAIL_USER,
      bcc: bcc || undefined,
      subject,
      html: body,
    });

    await Email.create({
      to,
      bcc,
      subject,
      body,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ===========================
   Email History
=========================== */

app.get("/email-history", async (req, res) => {
  try {
    const emails = await Email.find()
      .sort({ sentAt: -1 })
      .limit(50);

    res.status(200).json(emails);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ===========================
   Start Server
=========================== */

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

startServer();