import multer, { FileFilterCallback } from 'multer';

// Define allowed MIME types
const allowedMimeTypes = ['image/png', 'image/jpeg'];

// Custom function to handle file filter errors
const handleFileFilterError = (message: string, cb: FileFilterCallback) => {
  cb(new Error(message) as unknown as null, false);
};

// Set up multer with memory storage and size limit
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: (req, file, cb: FileFilterCallback) => {
    // Check if the file type is allowed
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // No error, file is accepted
    } else {
      handleFileFilterError('Invalid file type', cb); // Use custom error handling function
    }
  }
});

export default upload;
