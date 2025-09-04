const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-order-email", async (req, res) => {
  const { email, name, items, totalAmount, address, phone } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS 
      }
    });

    const itemsHtml = items
      .map(
        (item) => `<li>${item.name} x ${item.quantity || 1} = ₹${(
          parseFloat(item.price.replace(/[₹,]/g, "")) *
          (item.quantity || 1)
        ).toFixed(2)}</li>`
      )
      .join("");

    let mailOptions = {
      from: `"Treasure Trove" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Order Confirmation - Treasure Trove",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for shopping with <b>Treasure Trove</b>.</p>
        <p>Your order has been placed successfully with <b>Cash on Delivery</b>.</p>
        <h3>Order Summary:</h3>
        <ul>${itemsHtml}</ul>
        <h3>Total: ₹${totalAmount}</h3>
        <p>We will deliver your items soon.</p>
        <p><h3>Deliver to:</h3> ${address}</p>
        <p><h3>Phone No: ${phone} </h3></p>
        <p>Thank you for shopping with us! 
        We truly appreciate your trust.</p>  <br/> 
        <h4>Best Regards,</h4>
        <p> Treasure Trove </p>
        <p> Customer Care </p>
        <p> For any Queries contact this email : deepu812000@gmail.com </p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

module.exports = router;
