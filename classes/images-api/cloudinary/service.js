import { unlink } from 'fs/promises';
import { v2 as cloudinary } from 'cloudinary';
import logger from '../utils/logger.js';

cloudinary.config({
  secure: true,
});

const getAssetInfo = async (publicId) => {
  // Return colors in the response
  const options = {
    colors: true,
  };

  try {
    // Get details about the asset
    return await cloudinary.api.resource(publicId, options);
  } catch (error) {
    console.error(error);
  }
};

const uploadImage = async (imagePath, folderPath = '') => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: folderPath,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    logger.info(`Image uploaded successfully: ${JSON.stringify(result, null, 2)}`);
    await unlink(imagePath); // Delete the file after upload
    return result;
  } catch (error) {
    console.error(error);
    throw error; // Ensure error is propagated up, so the file is not deleted if upload fails
  }
};

const destroy = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    logger.error(error);
  }
};

export default {
  getAssetInfo,
  uploadImage,
  destroy,
};
