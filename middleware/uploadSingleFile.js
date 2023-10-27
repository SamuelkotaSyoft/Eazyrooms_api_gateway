import multer from "multer";

const fileUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
}).single("file");
// the name of the file input field and the maximum files that can be uploaded

const uploadSingleFile = (req, res, next) => {
  fileUpload(req, res, async (err) => {
    next();
  });
};

export { uploadSingleFile };
