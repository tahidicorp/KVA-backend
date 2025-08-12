// Define all the api routes/endpoints here

import express from 'express';

// Model-routes import
import health from './health.js'; 


const router = express.Router();

// Statutory routes
router.use('/health', health);

// module.exports = router;
export default router;