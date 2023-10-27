import multer from "multer";

const audioUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
}).single("audio");
// the name of the file input field and the maximum files that can be uploaded

const uploadSingleAudio = (req, res, next) => {
  audioUpload(req, res, async (err) => {
    next();
  });
};

export { uploadSingleAudio };

