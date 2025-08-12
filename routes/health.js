import express from 'express';
import { sequelize } from '../config/db.js';  // Note .js extension
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await sequelize.query('SELECT 1 AS ok;');
    res.json({ ok: true, db: rows[0]?.ok === 1 });
  } catch (err) {
    console.error('Health check failed:', err);
    res.status(500).json({ ok: false, error: 'DB connection failed' });
  }
});

export default router;  