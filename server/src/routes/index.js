import express from "express";
import paymentRoutes from "./payment.js"
const router = express.Router();

router.use('/payment',paymentRoutes);

export default router;