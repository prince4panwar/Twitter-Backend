import * as services from "../services/tweet-service.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const createTweet = async (req, res) => {
  try {
    const { content } = req.body;
    let imageUrl = null;

    // If user attached an image file, upload to Cloudinary
    if (req.file) {
      // Wrap Cloudinary stream upload in a Promise
      const uploadResult = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "tweets" },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            return resolve(result);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
      });

      imageUrl = uploadResult.secure_url; // hosted image link
    }

    const response = await services.createTweet({ content, image: imageUrl });
    return res.status(201).json({
      data: response,
      success: true,
      err: {},
      message: "Tweet is created successfully",
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Tweet is not created",
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await services.getTweet(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Tweet is fetched successfully",
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Tweet is not created",
    });
  }
};
