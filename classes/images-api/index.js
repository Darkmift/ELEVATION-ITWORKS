import 'dotenv/config';
import express from 'express';
import cloudinaryService from './cloudinary/service.js';
import logger from './utils/logger.js';
import getUplodMiddleware from './multer/index.js';

const PORT = 3000 || process.env.PORT;
const app = express();
app.use(express.json());

app.get(
  '/api/images/:publicId',
  // getUplodMiddleware('image-file'),
  async (req, res) => {
    logger.info(`Received request to get image:`, req.params.publicId);
    const data = await cloudinaryService.getAssetInfo(req.params.publicId);
    res.send({ url: data.secure_url, publicId: data.public_id });
  }
);
app.post('/api/images', getUplodMiddleware('image-file'), async (req, res) => {
  logger.info(`Received request to upload image: ${req.file.originalname}`, req.body, req.file);
  // upload to cloudinary
  const result = await cloudinaryService.uploadImage(req.file.path,'pikachu');
  res.send(result);
});

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
