import express from 'express';
import { createCheckoutController, webHookController } from '../controllers/payment.controller.js';

const router = express.Router();

router.route('checkout')
.post(createCheckoutController)

router.route('/webhook')
.post(webHookController)
export default router;