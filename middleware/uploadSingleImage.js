import multer from "multer";

const imageUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
}).single("image");
// the name of the file input field and the maximum files that can be uploaded

const uploadSingleImage = (req, res, next) => {
  imageUpload(req, res, async (err) => {
    next();
  });
};

export { uploadSingleImage };
