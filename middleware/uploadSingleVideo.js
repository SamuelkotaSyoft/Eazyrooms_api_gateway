import multer from "multer";

const videoUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
}).single("video");
// the name of the file input field and the maximum files that can be uploaded

const uploadSingleVideo = (req, res, next) => {
  videoUpload(req, res, async (err) => {
    next();
  });
};

export { uploadSingleVideo };
