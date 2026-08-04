import dotenv from "dotenv"
dotenv.config()
import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_dummy_key_id",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "dummy_secret",
});

export default razorpay