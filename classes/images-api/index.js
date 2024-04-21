import 'dotenv/config';
import express from 'express';
import cloudinaryService from './cloudinary/service.js';
import logger from './utils/logger.js';
import getUplodMiddleware from './multer/index.js';
import bodyParser from 'body-parser';

const PORT = 3000 || process.env.PORT;
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/images/:publicId', async (req, res) => {
  logger.info(`Received request to get image:`, req.params.publicId);
  const data = await cloudinaryService.getAssetInfo(req.params.publicId);
  if (!data) {
    return res.status(404).send('Image not found');
  }
  res.send({ url: data.secure_url, publicId: data.public_id });
});

app.post('/api/images', getUplodMiddleware('image-file'), async (req, res) => {
  logger.info(JSON.stringify({ body: req.body, file: req.file }));
  logger.info(`Received request to upload image: ${req.file.originalname}`);
  // upload to cloudinary
  const result = await cloudinaryService.uploadImage(req.file.path, '');
  if (!result) {
    return res.status(500).send('Image upload failed');
  }
  res.send(result);
});

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
