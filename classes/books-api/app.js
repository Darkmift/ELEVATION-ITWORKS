import express from 'express';
import logger from './utils/logger.js';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: new Date().toDateString() });
});

// Catch-all error handling middleware
app.use((err, req, res, next) => {
  // Log the error internally
  logger.error(err);

  // Respond with 500 "Internal Server Error" status code and generic message
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'An unexpected error occurred',
  });
});

export default app;
